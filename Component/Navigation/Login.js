import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'green',
  },
});

export default Login;
