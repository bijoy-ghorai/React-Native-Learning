import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  console.warn(props.route.params)
  //
  const { name, age } = props.route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#063970' }}>Home Screen 😊</Text>
      {/* <Text style={{fontSize:30,fontWeight: 'bold',color:'green'}}>Name:{props.route.params.name}</Text> */}
      {/* <Text style={{fontSize:30,fontWeight: 'bold',color:'green'}}>Name:{props.route.params.age}</Text> */}

      {/* <Text style={{fontSize:30,fontWeight: 'bold',color:'green'}}>Name:{name}</Text>
      <Text style={{fontSize:30,fontWeight: 'bold',color:'black'}}>Name:{age}</Text>
       */}
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'green' }}>Name:{name}</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'green' }}>Age:{age}</Text>

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

  )
}

export default Home

const styles = StyleSheet.create({})