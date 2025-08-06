import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Register = () => {
  return (
         <View className='bg-black flex h-[60%] w-[90%] rounded-xl pl-2 pr-2 pt-2 pb-2 border-white/20 border'>
             <Text className='text-white'>Loguin</Text>
             <Link href={"/Loguin"} className='bg-blue-200'> Go to Loguin</Link>
 
         </View>
      
  )
}

export default Register