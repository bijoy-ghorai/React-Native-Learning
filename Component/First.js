import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const StyleStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // For All Screen Style
      screenOptions={{
            headerStyle:{
              backgroundColor:'#d234eb',
            },
            headerTintColor:'white',
            headerTitleStyle:{
              fontSize:25,
            }
          }}
        >
        <Stack.Screen  name='Login' component={Login}
        // For One Screen Defarent Style
          options={{
            title:'Login Info',// Title Name Change(Login)
            headerStyle:{
              backgroundColor:'#b108c7',
            },
            headerTintColor:'yellow',
            headerTitleStyle:{
              fontSize:25,
            }
          }}
        
        />
        <Stack.Screen  name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//Componant
const Login=(props)=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,color:'green'}}>Login Screen</Text>
      <Button title='Go to Home Page' onPress={()=> props.navigation.navigate('Home')}/>
    </View>
  )
};

const Home=()=>{
  return(
    <View style={{ flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30,color:'green'}}>Home Screen 😊</Text>
      
    </View>
  )
}
export default StyleStackNavigation 

const styles = StyleSheet.create({})