import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const StatusBr = () => {
  const[hide,setHide]=useState(false)
  const[bar,setBarStyle]=useState('default')//by defualt
  return (
    <View style={styles.container}>
       <StatusBar
        backgroundColor='green'
        // barStyle={'light-content'}
        // barStyle={'dark-content'}
        // barStyle={'default'}
        barStyle={bar}
        hidden={hide}
       />
        <Button title='Hide Status Bar' onPress={()=>setHide(!hide)}/>
        <Button title='Update Style' onPress={()=>setBarStyle('dark-content')}/>
      
    </View>
  )
}

export default StatusBr

const styles = StyleSheet.create({
  container:{
    flex:1,

    justifyContent:'center'
  }
});