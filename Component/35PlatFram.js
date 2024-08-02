import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlatFram = () => {
  return (
    <View>
      <Text style={{fontSize:20}}>PlatFrom: {Platform.OS}</Text>
      {
        Platform.OS =="android" ?
        <View style={{backgroundColor:'yellow',height:100,width:100}}></View>:
        <View style={{backgroundColor:'Green',height:100,width:100}}></View>
      }
      <Text style={styles.text}> Hello</Text>
      {/* react-native version Check */}
      <Text style={{fontSize:15}}>The version{JSON.stringify(Platform)}</Text>
    </View>
  )
}

export default PlatFram

const styles = StyleSheet.create({
  text:{
    color:Platform.OS=="android" ? "green" : "Blue"
  }
})