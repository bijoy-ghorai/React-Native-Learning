import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHookLifeCarcleMathodeUnmount = () => {
    const[show,setShow]=useState(true)
  return (
    <View>
      <Text style={{fontSize:16,color:'yellow'}}>26UseEffectHookLifeCarcleMathodeUnmount</Text>
      <Button title='Toggle' onPress={()=>setShow(!show)}/>
      {
        show?<Student/> : null
      }
    </View>
  )
}

const Student=()=>{
     let timer=setInterval(()=>{
        console.warn('Timer Called');
    },2000)

    useEffect(()=>{
        //return()=>(console.warn('useEffect Called on Unmount'))
        return()=>clearInterval(timer)
    })
    return(
        <View>
            <Text style={{fontSize:20,color:'green'}}>Student</Text>
        </View>
    )
}
export default UseEffectHookLifeCarcleMathodeUnmount

const styles = StyleSheet.create({})