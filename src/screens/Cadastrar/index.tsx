import React, { Component, useEffect, useState } from "react";
import { View, KeyboardAvoidingView, Text } from "react-native";
import { styles } from './styles';
import { Entypo, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { ComponentButtonInterface, ComponentLoading } from "../../components"
import { LoginTypes } from "../../navigations/login.navigation";
import { IRegister } from "../../services/data/User";
import { AxiosError } from "axios";
import { apiUser} from "../../services/data"
export interface IErrorApi {
  erros: {
    rule: string
    field: string
    message: string
  }[]
}
export function Cadastrar({ navigation }: LoginTypes) {
  const [data, setData] = useState<IRegister>()
  const [isLoading, setIsLoading] = useState(true)
  function handleChange(item: IRegister) {
    setData({ ...data, ...item })
  }
   async function handleRegister() {
    try {
      setIsLoading(true)
      if (data?.name && data.email && data.password) {
        const response = await apiUser.register(data)
        Alert.alert(`${response.data.name} cadastrado!!`)
        navigation.navigate('Login')
      } else {
        Alert.alert("Preencha todos os campos!!!")
      }
    } catch (error) {
      const er = error as AxiosError
      const erroData = err.response?.data as IErrorApi
      let message = ""
      if (errorData) {
        for (const iterator of erroData.erros) {
          message = `${message} ${iterator.message} \n`
        }
      }
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])
  return (
    <>
      {isLoading ? (
        <ComponentLoading />
      ) : (
        <View style={styles.container}>
          <KeyboardAvoidingView>
            <Text style={styles.title}>Cadastre-se</Text>

            <View style={styles.formRow}>
              <FontAwesome5 name="nome" style={styles.icon} />
              <TextInput
                placeholder="name"
                placeholderTextColor={colors.black}
                keyboardType="default"
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(i) => handleChange({ name: i })}
              />
            </View>
            <View style={styles.formRow}>
              <MaterialIcons name="email" style={styles.icon} />
              <TextInput
                placeholder="email"
                placeholderTextColor={colors.black}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(i) => handleChange({ email: i })}
              />
            </View>
            <View style={styles.formRow}>
              <Entypo name="key" style={styles.icon} />
              <TextInput
                placeholder="senha"
                placeholderTextColor={colors.black}
                secureTextEntry={true}
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(i) => handleChange({ password: i })}
              />
            </View>
            <ComponentButtonInterface title="Salvar" type="primary" onPressI={handleRegister} />
            <ComponentButtonInterface title="Voltar" type="primary" onPressI={() => { navigation.navigate('Login') }} />
          </KeyboardAvoidingView>
        </View>
      )}
    </>
  )
}