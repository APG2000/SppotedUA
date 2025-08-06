import { Slot } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const _layout = () => {


  return (
    <>
    <SafeAreaView className='bg-black/95 flex flex-1 items-center justify-around'>
       
    <Slot/>  

    </SafeAreaView>

    </>
    

  )
}

export default _layout