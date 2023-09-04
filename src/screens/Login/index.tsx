import React, { useState } from "react";
import { View, KeyboardAvoidingView, Text, Alert }from "react-native";
import { styles } from "./sytles";
import { Entypo, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { ComponentButtonInterface } from "../../components";
import { LoginTypes  } from "../../navigations/login.navigation";
import { IAuthenticate } from "../../services/data/User";
import { useAuth } from "../../hooks/auth";
import { AxiosError } from "axios";
export interface IErrorApi {
    erros: {
      rule: string
      field: string
      message: string
    }[]
  }

export function Login( { navigation}: LoginTypes) {
    const { singIn } = useAuth();
    const [ data, setData ] = useState<IAuthenticate>();
    const [ isLoading, setIsLoading] = useState(true);
    async function handleSingIn() {
        try {
            setIsLoading(true);
            if (data?.email && data.password) {
                await singIn(data);
            } else {
                Alert.alert("Preencha todos os campos!!!!");
                setIsLoading(false);
            }
        } catch (error) {
            const err = error as AxiosError;
            const message = err.response?.data as string
            Alert.alert(message)
                setIsLoading(false);
        }
     }
    return (
        <View style={styles.container}>
           <KeyboardAvoidingView>
              <Text style={styles.title}>Login</Text>
              <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon} />
                <TextInput
                    placeholder="email"
                    placeholderTextColor={colors.black}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}  
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
              />
              </View>
              <ComponentButtonInterface title="Entrar" type="primary" onPressI={() => { navigation.navigate('Tab') }} />
              <ComponentButtonInterface title="Cadastrar" type="primary" onPressI={() => { navigation.navigate('Cadastrar') }} />
           </KeyboardAvoidingView>
        </View>
    )
}