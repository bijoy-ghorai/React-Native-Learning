import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GameOnLetsGo = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#063970' }}>GAMEON</Text>
      </View>

      <TouchableOpacity
        style={{ backgroundColor: "#2596be", padding: 20, width: "90%", borderRadius: 30, flexDirection: 'row',justifyContent: "space-between" }}>
        <Text style={{fontWeight:'bold',fontSize:26,color:'white',marginLeft:20}}>Let's Begin </Text>
        {/* <MaterialIcons name="arraw-forward-android" size={22} color="#fff"/> */}
      </TouchableOpacity>
    </SafeAreaView>
  )  
}

export default GameOnLetsGo

const styles = StyleSheet.create({})