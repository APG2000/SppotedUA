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
    KeyboardType="default",
    onSubmitEditing,
    clasName,
    editable,
    multiline,
    numberOfLines

}:CustomInputProps) => {
    const [isFocused,setIsfocused]=useState(false)

  return (
    <View className='w-fulljustify-around flex flex-col'>
      <TextInput
        editable={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
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
        className={clasName ? clasName : cn("border-white/20 border rounded-xl h-14 pl-4 text-white", isFocused ? "border-b-[#FE8C00]" : "border-white/20")}
        onSubmitEditing={onSubmitEditing}
      >
        
      </TextInput>
    </View>
  )
}

export default CustomInput