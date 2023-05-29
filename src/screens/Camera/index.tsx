import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera';
import { Component, useRef, useState } from 'react';
import { Button, Text, Image, View, Alert, TouchableOpacity } from 'react-native';
import { ComponentButtonInterface, ComponentButtonTakePicture } from '../../components';
import { styles } from "./styles"
import { Entypo } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker';
import * as FaceDetector from 'expo-face-detector';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

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
  const [permissionQrCode, requestPermissionQrCode] = BarCodeScanner.usePermissions();
  const [ scanned, setScanned] = useState(false);
  const [face, setFace] = useState<FaceDetector.FaceFeature>()

  if (!permission || !permissionMedia || !permissionQrCode) {
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
      setTakePhoto(false)
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
  const handleBarCodeScanned = ({ type, data} : BarCodeScannerResult) => {
    setScanned(true);
    alert(data);
  }
  const handleFacesDetected = ({ faces }: FaceDetectionResult) : void => {
    if(faces.length > 0) {
      const faceDetect = faces[0] as FaceDetector.FaceFeature
      setFace(faceDetect)
      //console.log(faceDetect)
    } else {
      setFace(undefined)
    }
  };
  return(
  <>
      {takePhoto ? (
        <>
        <Camera style={styles.camera} ref={ref}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} 
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.accurate,
            detecLandmarks: FaceDetector.FaceDetectorLandmarks.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.all,
            minDetectionInterval: 1000,
            tracking: true,
          }}
          >
          <View style={styles.sorriso}>
            {face && face.smilingProbability && face.smilingProbability> 0.5 ? (
               <Text>Sorrindo</Text>
            ) : (
              <Text>Não</Text>
            )}
          </View>
          <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
            <Entypo name="cycle" size={20} color="black" />
          </TouchableOpacity>
        
        </Camera>
        <ComponentButtonInterface title="Tirar Foto" type="secondary" onPressI={takePicture} />
        </>
      ) : (
        <>
          <ComponentButtonInterface title="Tirar Foto" type="secondary" onPressI={()=> setTakePhoto(true)} />
          { photo && photo.uri && (
             <>
             <Image source={{ uri: photo.uri }} style={styles.img} />
             <ComponentButtonInterface title="Salvar Imagem" type="secondary" onPressI={savePhoto} />
             </>
          )}
          <ComponentButtonInterface title="Abrir Imagem" type="secondary" onPressI={pickImage} />
        </>
      )}
    </>
  );
}