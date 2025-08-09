import { View, Text, Pressable } from 'react-native'
import React from 'react'


interface CustomBtnProps{
    title:string,
    onPress:()=>void
}
const CustomBtn = ({title,onPress}:CustomBtnProps) => {
  return (
        <Pressable  className='bg-white w-[40%] h-10 items-center justify-center rounded-xl' onPress={onPress}>
             <Text className='text-black'>{title}</Text>
        </Pressable>
  )
}

export default CustomBtn