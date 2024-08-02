import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ResponsivLayoutWithFlexbox = () => {
  return (
    <View style={styles.main}>
      {/*<Text style={{fontSize:20,textAlign:'center',color:'yellow'}}>27ResponsivLayoutWithFlexbox</Text> */}
      {/*         
        <View style={{flex:1,backgroundColor:'pink'}}></View>
        <View style={{flex:1,backgroundColor:'white'}}></View>
        <View style={{flex:1,backgroundColor:'green'}}></View> 
    */}

      <View style={styles.box1}>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox2}></View>
        <View style={styles.innerBox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>

    </View>
  );
};

export default ResponsivLayoutWithFlexbox;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection:'row'
  },
  box1:{
    flex: 1, backgroundColor: 'pink',
    flexDirection:'row'
  },
  box2:{
    flex: 1, backgroundColor: 'white'
  },
  box3:{
    flex: 1, backgroundColor: 'green'
  },
  innerBox1:{
    flex:1,backgroundColor:'yellow',margin:10
  },
  innerBox2:{
    flex:1,backgroundColor:'blue',margin:10
  },
  innerBox3:{
    flex:1,backgroundColor:'lightblue',margin:10,
  }
});
