import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//Component
const Home =()=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,color:'green'}}>Home Screen</Text>
    </View>
  )
};

const Login =(props)=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,color:'green'}}>Login Screen</Text>
      <Button title='Go to Home Page' onPress={()=>props.navigation.navigate('Home')}/>
    </View>
  )
}
export default StackNavigation

const styles = StyleSheet.create({})