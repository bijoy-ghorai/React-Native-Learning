import { Button, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../41ComponentStackNavigationLogin';
import Home from './Home';

// Import Home and Login components


const Stack = createNativeStackNavigator();

const StyleStackNavigation = () => {
  const btnAction = () => {
    console.warn('btnPress');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        // For All Screen Style
        screenOptions={{
          headerStyle: {
            backgroundColor: '#bccf3c',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          // For One Screen Different Style
          options={{
            // For left Button create
            headerTitle: () => <Button onPress={btnAction} title="Left" />,
            // For Right Button create
            headerRight: () => <Header />,
            title: 'Login Info', // Title Name Change(Login)
            headerStyle: {
              backgroundColor: '#b108c7',
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return <TextInput placeholder="Right Component" style={styles.input} />;
};

export default StyleStackNavigation;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});
