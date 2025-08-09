import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { CustomInputProps } from '@/type'
import cn from "clsx"
import { Platform } from 'react-native'
const CustomInput = ({
    placeholder="enter text",
    value,
    onChangeText,
    label,
    secureTextEntry=false,
    KeyboardType="default"
}:CustomInputProps) => {
    const [isFocused,setIsfocused]=useState(false)

  return (
    <View className='w-fulljustify-around flex flex-col'>
   
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={KeyboardType}
        onFocus={()=>setIsfocused(true)}
        onBlur={()=>setIsfocused(false)}
        placeholder={placeholder}
        placeholderTextColor={"#888"}
        onChangeText={onChangeText}
        className={cn("border-white/20  border rounded-xl h-14 pl-4 text-white" ,isFocused? "border-b-[#FE8C00]":"border-white/20")}

      >
        
      </TextInput>
    </View>
  )
}

export default CustomInput