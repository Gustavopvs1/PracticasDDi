import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AccountScreen from '../../../screen/AccountScreen'
import CambiarNombre from '../../../screen/Menu/CambiarNombre'
import CambiarPassword from '../../../screen/Menu/CambiarPassword'
import CambiarEmail from '../../../screen/Menu/CambiarEmail'
import CambiarUser from '../../../screen/Menu/CambiarUser'

export default function StackAccount() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
    initialRouteName='AccountScreen'
    >
      <Stack.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{
          title: '',
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name='CambiarNombre'
        component={CambiarNombre}
        options={{
          title: '',
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name='CambiarEmail'
        component={CambiarEmail}
        options={{
          title: '',
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name='CambiarUser'
        component={CambiarUser}
        options={{
          title: '',
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name='CambiarPassword'
        component={CambiarPassword}
        options={{
          title: '',
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  )
}