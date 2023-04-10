import React from "react";
import { View, KeyboardAvoidingView, Text }from "react-native";
import { styles } from "./sytles";
 import { Entypo, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { ComponentButtonInterface } from "../../components";
import { LoginTypes  } from "../../navigations/login.navigation";

export function Login( { navigation}: LoginTypes) {
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
              <ComponentButtonInterface title="Entrar" type="primary" onPressI={() => { navigation.navigate('Entrar') }} />
              <ComponentButtonInterface title="Login" type="primary" onPressI={() => { navigation.navigate('Cadastrar') }} />
           </KeyboardAvoidingView>
        </View>
    )
}