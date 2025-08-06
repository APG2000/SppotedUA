import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Chat = () => {
  return (
    <SafeAreaView className='flex flex-1 justify-around items-center bg-red-200'>
         <Text>Chat</Text>
    </SafeAreaView>
  )
}

export default Chat