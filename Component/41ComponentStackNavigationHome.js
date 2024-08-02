import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
export const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:30,fontWeight: 'bold',color:'green'}}>Home Screen 😊</Text>
      <View
        style={{
          borderColor: 'black',
          borderWidth: 0.9,
          backgroundColor: 'lightpink',
          paddingHorizontal: 14,
          width: '90%',
          borderRadius: 12,
        }}>
        <TextInput placeholder="Enter your name" />
      </View>
    </View>
  );
};
