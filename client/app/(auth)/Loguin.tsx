import { Link, useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import SpottedUALogo from '../components/SpottedUALogo'

const Loguin = () => {
    const router = useRouter();
  return (
        <View className='bg-black flex  h-[65%] w-[95%] rounded-xl pl-2 pr-2 pt-2 pb-2 border-white/20 border  justify-center '>
            <View className='border-b-2 border-b-white/20 h-20 flex flex-row  items-center justify-around  '>
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

            <View className='flex flex-col mt-20 gap-10 pl-2 pr-2'>
                <TextInput className='border border-white/20 h-[20%] text-white pl-2 rounded-xl' placeholder='Insira o teu email'/>
                <TextInput className='border border-white/20 h-[20%] text-white  pl-2 rounded-xl' placeholder='Insira a tua senha'  />

            </View>
            <View className='flex items-center -mt-20'>
                   <Pressable className='bg-red-200' onPress={()=>router.replace("/")} style={
                {
                    backgroundColor:"white",
                    alignItems:"center",
                    width:"60%",
                    justifyContent:"space-around",
                    height:"20%",
                    borderWidth:"2px",
                    borderRadius:"2%"
                }
            }>
                <Text className='text-black'>Entrar</Text>
            </Pressable>
            <Text className='text-white mt-5'>🔒 Suas interações são 100% anônimas</Text>
            <View className='  flex flex-row gap-2 mt-5'>  
                <Text className='text-white font-bold border-2 border-white/20 w-26 pl-2 pr-2 pt-2 pb-2 rounded-lg  bg-[#FE8C00] '>Seguro</Text>
                <Text className='text-white font-bold border-2 border-white/20 w-26 pl-2 pr-2 pt-2 pb-2 rounded-lg  bg-[#FE8C00]'>Anônimo</Text>
                <Text className='text-white font-bold border-2 border-white/20 w-26 pl-2 pr-2 pt-2 pb-2 rounded-lg  bg-[#FE8C00]'>Universitario</Text>


                </View>
         
            </View>
           
            
            <View className='flex flex-row items-center  -mt-20 justify-center gap-2'>
                
                <Text className='text-white font-extrabold text-2sm'>Nao tens uma conta? </Text>
                <Link href={"/(auth)/Register"} className='text-white font-extrabold text-xl border-b-2 border-b-[#FE8C00]'>Crie aqui</Link>
            </View>

        </View>
     
  )
}

export default Loguin