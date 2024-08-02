import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//useEffect Mounting Phase
const UseEffectHooKaSLifeCycleMethodeInFunctionComponent = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
       console.warn("Hello") 
    },[])
  return (
    <View>
      <Text style={{fontSize:14,color:'yellow'}}>23UseEffectHooKaSLifeCycleMethodeInFunctionComponent{count}</Text>
      <Button title='updateCount ' onPress={()=>setCount(count+1)}/>
    </View>
  )
}

export default UseEffectHooKaSLifeCycleMethodeInFunctionComponent

const styles = StyleSheet.create({})