import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Pressable, Text, TextInput, View } from 'react-native'
import SpottedUALogo from '../components/SpottedUALogo'
import CustomInput from '../components/CustomInput'
import LottieView from 'lottie-react-native';

const Loguin = () => {
    const router = useRouter();

   const [form,setForm] = useState({email:'',password:""})

  return (
    

        <View className='flex flex-1 w-full h-full items-center justify-center gap-5'>
          
          <LottieView 
            source={require("@/assets/images/social_media_network.json")}
                    
            style={{
                width:150,
                height:150,
                alignSelf:"flex-start"
            
            }}
            autoPlay loop />
          
            <Text className='text-white font-extrabold text-3xl'> Login</Text>
            <View className='bg-black  h-[65%] w-[95%] rounded-xl pl-2 pr-2 pt-2 pb-2 border-white/20 border  justify-center'>

            <View className='flex flex-col mt-10 gap-5 pl-2 pr-2'>
                
                <CustomInput placeholder='Insira o teu email' value={form.email} onChangeText={(text)=>setForm((prev)=>({...prev,email:text}))} label="Email" secureTextEntry={false} KeyboardType='email-address'/>
                <CustomInput placeholder='Insira a tua password' value={form.password} onChangeText={(text)=>setForm((prev)=>({...prev,password:text}))} label="Password" secureTextEntry={true} KeyboardType='default'/>

                {/*<TextInput className='border border-white/20 h-[20%] text-white  pl-2 rounded-xl' placeholder='Insira a tua senha'   placeholderTextColor={"gray"}/> */} 

            </View>
            <View className='flex items-center mt-10 gap-4'>
                <Pressable  onPress={()=>router.replace("/")} style={
                    {
                        backgroundColor:"white",
                        alignItems:"center",
                        width:"60%",
                        justifyContent:"space-around",
                        height:"20%",
                        borderWidth:1,
                        borderColor:"white",
                        borderRadius:"2%"
                    }
                }>
                    <Text className='text-black'>Entrar</Text>
                </Pressable>
                <Text className='text-white mt-5'>🔒 Suas interações são 100% anônimas</Text>
                <View className='  flex flex-row gap-2 mt-5'>  
                    <Text className='text-white font-bold border-2 border-white/20 w-26 pl-2 pr-2 pt-2 pb-2 rounded-lg  bg-[#FE8C00]/70 '>Seguro</Text>
                    <Text className='text-white font-bold border-2 border-white/20 w-26 pl-2 pr-2 pt-2 pb-2 rounded-lg  bg-[#FE8C00]/70'>Anônimo</Text>
                    <Text className='text-white font-bold border-2 border-white/20 w-26 pl-2 pr-2 pt-2 pb-2 rounded-lg  bg-[#FE8C00]/70'>Universitario</Text>


                </View>
         
            </View>
           
            
            <View className='flex flex-row items-center  -mt-5 justify-center gap-2'>
                
                <Text className='text-white font-extrabold text-2sm'>Nao tens uma conta? </Text>
                <Link href={"/(auth)/Register"} className='text-white font-extrabold text-xl border-b-2 border-b-[#FE8C00]'>Crie aqui</Link>
            </View>


            </View>

        </View>
        
     
  )
}

export default Loguin