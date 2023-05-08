import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {ScreenLogin, ScreenCadastrar} from "../screens"
import { TabNavigation} from "./tab.navigation"
type LoginSctakParamList = {
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
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
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  );
} 