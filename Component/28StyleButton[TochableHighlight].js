import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const StyleButtonTochableHighlight = () => {
  return (
    <View>
      {/* <Text style={{fontSize:20,color:'yellow',textAlign:'center'}}>28StyleButtonTochableHighlight</Text> */}
        <TouchableHighlight>
           <Text style={styles.button}>Button</Text>
        </TouchableHighlight>

        <TouchableHighlight>
           <Text style={[styles.button,styles.primary]}>Primary</Text>
        </TouchableHighlight>

        <TouchableHighlight>
           <Text style={[styles.button,styles.warning]}>Warning</Text>
        </TouchableHighlight>

        <TouchableHighlight>
           <Text style={[styles.button,styles.error]}>Error</Text>
        </TouchableHighlight>

        <TouchableHighlight>
           <Text style={[styles.button,styles.success]}>Success</Text>
        </TouchableHighlight>
        

    </View>
  )
}

export default StyleButtonTochableHighlight

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    button:{
        textAlign:'center',
        fontSize:25,
        color:'white',
        backgroundColor:'#bbb',
        padding:12,
        margin:10,
        borderRadius:15,
        shadowColor:'yellow',
        elevation:8,
        shadowOpacity:2
    },
    success:{
        backgroundColor:'green',
    },
    primary:{
        backgroundColor:'blue'
    },
    warning:{
        backgroundColor:'yellow'
    },
    error:{
        backgroundColor:'red'
    }
})