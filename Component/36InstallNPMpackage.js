import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{WebView} from 'react-native-webview'

const InstallNPMpackage = () => {
  return (
    <WebView source={{uri:"https://reactnative.dev/"}}/>
  )
}

export default InstallNPMpackage

const styles = StyleSheet.create({})