import React from 'react';
//import { View } from 'react-native';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
export const Login = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: 'green'}}>Login Screen</Text>
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};
