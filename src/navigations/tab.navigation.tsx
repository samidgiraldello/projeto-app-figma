import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenCamera, ScreenPerfil} from "../screens"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors } from '../styles/colors';
import { Ionicons, AntDesign } from '@expo/vector-icons';
type TabParamList = {
  Perfil: undefined
  Camera: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}
 export function TabNavigation() {
       const Tab = createBottomTabNavigator<TabParamList>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
        backgroundColor: Colors.secondary
        },
        headerTintColor: colors.black,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.black
      }}
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
         options={{
           tabBarIcon: () => (
           <Ionicons name='person' color={colors.black} size={24} />
           ) 
         }}
      />
      <Tab.Screen name="Camera" component={ScreenCamera} 
       options={{
        tabBarIcon: () => (
          <AntDesign name='camera' color={colors.black} size={24} />
        ) 
       }}
      />
    </Tab.Navigator>
  )
}