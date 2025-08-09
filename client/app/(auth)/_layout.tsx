import { Slot } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import SpottedUALogo from '../components/SpottedUALogo'
import { Text } from 'react-native'
const _layout = () => {


  return (
    
    <SafeAreaView className='bg-black/95 flex flex-1 items-center '>
              <View className='border-b-2 border-b-white/20 h-20 flex flex-row  items-center gap-10   '>
                   <SpottedUALogo/>
                   
            
                    <View className='flex flex-col'>
                        <Text className='text-white text-sm text-muted-foreground'>
                            Campus
                        </Text>
                        <Text className='text-white text-sm text-muted-foreground'>
                            Universitario
                        </Text>

                    </View>
                   
            </View>
      <Slot/>  

    </SafeAreaView>

    
    

  )
}

export default _layout