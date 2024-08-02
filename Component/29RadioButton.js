import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

const RadioButton = () => {
    const[slectedRadio,setslectedRadio]=useState(1)
  return (
      <View style={styles.main}>
        <TouchableOpacity onPress={()=>setslectedRadio(1)}>
          <View style={styles.radioWraper}>
            <View style={styles.radio}>
                {
                    slectedRadio===1 ? <View style={styles.radioBg}></View>:null
                }
            </View>
              <Text style={styles.radioText}> Radio 1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setslectedRadio(2)}>
          <View style={styles.radioWraper}>
          <View style={styles.radio}>
          {
            slectedRadio===2 ? <View style={styles.radioBg}></View>:null
          }
          </View>
          
            <Text style={styles.radioText}> Radio 1</Text>
          </View>
        </TouchableOpacity>
      </View>

  );
};

export default RadioButton;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText:{
    fontSize:20,
    color:'skyblue',
  },
  radio:{
    margin:10,
    height:40,
    width:40,
    borderColor:'yellow',
    borderRadius:20,
    borderWidth:2,
  },
  radioBg:{
    backgroundColor:'blue',
    height:28,
    width:28,
    borderRadius:20,
    margin:4
  },
  radioWraper:{
    flexDirection:'row',alignItems:'center'
  }
});
