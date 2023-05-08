import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {ScreenLogin, ScreenCadastrar} from "../screens"
import { TabNavigation} from "./tab.navigation"
import { DrawerNavigation } from './drawer.navigation';
type LoginSctakParamList = {
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
  Drawer: undefined
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
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
} 