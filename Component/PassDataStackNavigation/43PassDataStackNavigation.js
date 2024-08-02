import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home';
import Login from './Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const PassDataStackNavigation = () => {
  // const btnAction = () => {
  //   console.warn("btnPress")
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25,
          }
        }}
      >
        <Stack.Screen name='LoginScreen' component={Login}
          options={{
            headerTitle: () => <Button onPress={()=>console.warn('btnPress')} title='Left' />,
            headerRight: () => <Header />,
            title: 'Login Info',// Title Name Change(Login)
            headerStyle: {
              backgroundColor: '#b108c7',
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
              fontSize: 25,
            }

          }}
        />

        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const Header = () => {
  return (
    <View>
      <TextInput placeholder='Right Component'
        style={{
          backgroundColor: 'white'
        }} />
    </View>
  )
}
export default PassDataStackNavigation

const styles = StyleSheet.create({})