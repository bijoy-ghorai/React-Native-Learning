import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const TogleShowHide = () => {
    const [show,setShow]=useState(false)
  return (
    <View>
      <Text style={{fontSize:20,color:'yellow',textAlign:'center'}}>25TogleShowHide</Text>
      {/* TWO BUTTON HIDE &  SHOW */}

        {/* <Button title='Hide Component' onPress={()=>setShow(false)}/>
        <Button title='Show Component' onPress={()=>setShow(true)}/> */}
        
    {/* ONE BUTTON HIDE & SHOW USING TOGLE   */}
        <Button title='Togle Component' onPress={()=>setShow(!show)}/>
        {/* {
            show==true?<User/> : null
        } */}
        
     {
        show ? <User/> : null
     }
    </View>
  )
}

const User=()=>{
    return(
      <View>
        <Text style={{fontSize:25,color:'green'}}>User Component</Text>
      </View>  
    )
}
export default TogleShowHide;

const styles = StyleSheet.create({})