import React from "react";
import { View, KeyboardAvoidingView, Text } from "react-native";
import { styles } from './styles';
import { Entypo, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { ComponentButtonInterface } from "../../components"
import { LoginTypes } from "../../navigations/login.navigation"

export function Cadastrar({ navigation }: LoginTypes) {
  return (
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
        <ComponentButtonInterface title="Salvar" type="primary" onPressI={() => {console.log('oi')}} />
        <ComponentButtonInterface title="Voltar" type="primary" onPressI={() => { navigation.navigate('Login') }} />
      </KeyboardAvoidingView>
    </View>
  )
}