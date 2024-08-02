import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Import Home and Login components
import { Home } from './41ComponentStackNavigationHome'
import { Login } from './41ComponentStackNavigationLogin'

const Stack = createNativeStackNavigator();
const StyleStackNavigation = () => {
  const btnAction=()=>{
    console.warn("btnPress")
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
      // For All Screen Style
      screenOptions={{
            headerStyle:{
              backgroundColor:'#bccf3c',
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
            //For left Buttan creat
            headerTitle: ()=><Button  onPress={btnAction} title='Left'/>,

            //For Right Buttan creat
            headerRight:()=>
            // <Button onPress={btnAction} title='Right'/>
            <Header/>,

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
};

const Header =()=>{
  return(
    // <Button title='Right Componant'/>,
    <TextInput  placeholder='Right Component'/>
  
  ) 
}



export default StyleStackNavigation 

const styles = StyleSheet.create({})