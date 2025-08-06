import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Tab = () => {
  return (
    <SafeAreaView className='flex flex-1 justify-around items-center bg-red-200'>
      <Text>Perfil</Text>
    </SafeAreaView>
  )
}

export default Tab