import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TLogin from './44TLogin';
import TSingUp from './44TSingUp';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// cache Clean: npm start--clean-cache

//For Use Tab Navigation: createBottomTabNavigator()
// const Tab = createBottomTabNavigator();

//For Top Nabvigation
const Tab=createMaterialTopTabNavigator();
const TabNavigaion = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={TLogin}/>
        <Tab.Screen name='SingUp' component={TSingUp}/>
        <Tab.Screen name='Other' component={TSingUp}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigaion

const styles = StyleSheet.create({})