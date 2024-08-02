import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen 😊</Text>
      <Button
        title="Go to Login Page"
        onPress={() => props.navigation.navigate('Login')}
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
    fontSize: 30,
    color: 'green',
  },
});

export default Home;
