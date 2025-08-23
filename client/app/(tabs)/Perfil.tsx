import useAuthStore from '@/Store/auth.store'
import { useStore } from 'expo-router/build/global-state/router-store'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Image, ScrollView, Text,TouchableOpacity,View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Tab = () => {
  const {user,setIsAuthenticated,setUser} = useAuthStore()
  return (
    <SafeAreaView className='flex flex-1  bg-black/95'>
      <View className="flex flex-row bg-white/10 h-[20%]  items-center   rounded-bl-2xl rounded-br-2xl">
          <LottieView
           source={require("@/assets/images/male_user.json")}
           style={{
            width:150,
            height:150,
            
           }}
           autoPlay
          />
          <View className='flex flex-1 items-center  h-full justify-around'>
            <Text className='text-white text-2xl font-bold'>Olá {user?.username}</Text>
          </View>
      </View>
      <View className='flex flex-1'>  
        <ScrollView className='flex flex-1 '>
         
           
          
        </ScrollView>
        
        

         

      </View>
  
       <View className='bg-red-500 h-20 fixed mb-20  w-[90%] self-center rounded-2xl justify-around'>
                    <TouchableOpacity onPress={()=>{

                      setUser(null)
                      setIsAuthenticated(false)
                    }}>
                      <Text className='text-white  text-center'> Sair</Text>


                    </TouchableOpacity> 
      </View> 
     
    </SafeAreaView>
  )
}

export default Tab