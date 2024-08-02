import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Lodar = () => {
    const [show,setShow]=useState(false);
    const displayLoader=()=>{
        setShow(false);
        setTimeout(()=>{
            setShow(true)
        },5000);
    }
  return (
    <View style={styles.main}>
      <ActivityIndicator size={"large"}  color="yellow" animating={show}></ActivityIndicator>
      <Button title='show loader' onPress={displayLoader}/>
    </View>
  )
}

export default Lodar;

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})