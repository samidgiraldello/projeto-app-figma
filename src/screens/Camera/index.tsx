import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { Component, useRef, useState } from 'react';
import { Button, Text, Image, View, Alert, TouchableOpacity } from 'react-native';
import { ComponentButtonInterface, ComponentButtonTakePicture } from '../../components';
import { styles } from "./styles"
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';

interface Iphoto {
  height: string
  uri: string
  width: string
}

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions()
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos de permissão para acessar a câmera!!</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  if (!permissionMedia) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionMedia.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos de permissão para acessar a mídia!!</Text>
        <Button onPress={requestPermissionMedia} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync()
      setPhoto(picture)
    }
  }
  async function savePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Imagens", asset, false)
    Alert.alert("Imagem salva com sucesso!")
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!result.canceled) {
      setPhoto(result.assets[0])
    }
  }
  return(
  <>
      {takePhoto ? (
        <Camera>
          <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
            <Entypo name="cycle" size={20} color="black" />
          </TouchableOpacity>
        </Camera>
      ) : (
        <>
          <ComponentButtonInterface title="Tirar Foto" type="secondary" onPressI={takePicture} />
          <Image source={{ uri: photo.uri }} style={styles.img} />
          <ComponentButtonInterface title="Salvar Imagem" type="secondary" onPressI={savePhoto} />
          <ComponentButtonInterface title="Abrir Imagem" type="secondary" onPressI={pickImage} />
        </>
      )}
    </>
  );
}