import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHooksStatePropsUpdate = () => {
  //Hook use in State

    const[count,setCount]=useState(0)
    const[data,setData]=useState(100)
    
   /* useEffect(()=>{
        console.warn(count);
    },[count,data]);
    */
    /*
    useEffect(()=>{
      console.warn('For Animation')
    },[count]);

    useEffect(()=>{
      console.warn('For Some Api call')
    },[data]);
    */
  return (
    <View>
      <Text style={{fontSize:20,color:'yellow'}}>{data}useEffectHooks State Update{count}</Text>
      <Button title='Update Counter' onPress={()=>setCount(count+1)}/>
      <Button title='Update Data' onPress={()=>setData(data+1)}/>
      <User info={{count,data}}/>
    </View>
  )
}

//Hook Use in Props
const User=(props)=>{
  useEffect(()=>{
    console.warn('Run this code When Count Update')
  },[props.info.count]);

  useEffect(()=>{
    console.warn('Run This Code When Data Update')
  },[props.info.data])
  return (
    <View>
      <Text style={{fontSize:20,color:'green'}}>useEffect Hooks PropsUpdate</Text>
      
    </View>
  )
}
export default UseEffectHooksStatePropsUpdate;

const styles = StyleSheet.create({})