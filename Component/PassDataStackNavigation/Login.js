import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Login = (props) => {
  // const name = 'Bijoy';
  // state under text 
  const [name,setName] = useState('')
  const age = 25;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'green' }}>Login Screen</Text>
      <TextInput
        style={{ fontSize: 20, borderColor: "rgb(135,62,35)", borderWidth: 3 }}
        onChangeText={(text) => setName(text)}
        placeholder='Enter Your Name'
      />
      <Button
        title="Go to Home Page"
        // for name change
        //  onPress={() => props.navigation.navigate('Home',{name:'Ajoy',age:21})}

        // No name change
        onPress={() => props.navigation.navigate('Home', { name, age })}
      />
    </View>

  )
}

export default Login

const styles = StyleSheet.create({})