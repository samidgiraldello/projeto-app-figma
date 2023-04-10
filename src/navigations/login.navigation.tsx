import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {ScreenLogin, ScreenCadastrar} from "../screens"
type LoginSctakParamList = {
  Login: undefined
  Cadastrar: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginSctakParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}
 export function LoginNavigation() {
       const Stack = createStackNavigator<LoginSctakParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
    </Stack.Navigator>
  );
} 