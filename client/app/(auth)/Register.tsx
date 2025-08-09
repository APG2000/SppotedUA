import { Link, Redirect, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import Local from '../components/Local'
import MapaLocalizacao from '../components/MapaLocalizacao'
import { SafeAreaView } from 'react-native-safe-area-context'
import SpottedUALogo from '../components/SpottedUALogo'
import CustomInput from '../components/CustomInput'

import { RegisterUser } from '@/services/Auth'
const Register = () => {
  const router=useRouter();
  const [form,setForm] = useState(
    {
      name:"",
      anonymousName:"",
      email:"",
      password:"",
      genero:"",
      dataNascimento:"",
      curso:"",
      altura:"",
      nacionalidade:"",
    }
  )
  const handleRegister=async () =>{
    //if((form.email || form.password || form.altura || form.curso) === ""){
    //  Alert.alert("Por favor preenche o formulario ")
    //  return
    //}
 
    //const operation=await RegisterUser(form, router)
    //if(operation===true){
    //  router.navigate("/")
    router.navigate("/(auth)/RegisterDetails")
  
    




    
  }
  return (
    
    <View className='flex flex-1 w-full h-full items-center justify-center gap-5'>
      
          <Text className='text-white font-extrabold text-3xl'>Criar Conta</Text>

          <View className='bg-black flex  h-[65%] w-[95%] rounded-xl pl-2 pr-2 pt-2 pb-2 border-white/20 border  justify-center gap-5 '>
                <CustomInput placeholder='Insira o teu email' value={form.email} onChangeText={(text)=>setForm((prev)=>({...prev,email:text}))} label="Email" secureTextEntry={false} KeyboardType='email-address'/>
                <CustomInput placeholder='Insira a tua password' value={form.password} onChangeText={(text)=>setForm((prev)=>({...prev,password:text}))} label="Password" secureTextEntry={true} KeyboardType='default'/>
                <CustomInput placeholder='Que curso Fazes?' value={form.curso} onChangeText={(text)=>setForm((prev)=>({...prev,curso:text}))} label="Curso" secureTextEntry={false} KeyboardType='default'/>
                <CustomInput placeholder='Insira a tua altura em cm' value={form.altura} onChangeText={(text)=>setForm((prev)=>({...prev,altura:text}))} label="Altura(cm)" secureTextEntry={false} KeyboardType='default'/>
                <TouchableOpacity className='flex self-center bg-white border border-white w-[50%] mt-[5%] h-[8%] items-center justify-center rounded-sm'
                onPress={()=>router.push("/(auth)/RegisterDetails")}
                >
                  <Text className='text-black'>Prosseguir</Text>
                </TouchableOpacity>
                 <TouchableOpacity className='flex self-center bg-white border border-white w-[50%] mt-[5%] h-[8%] items-center justify-center rounded-sm'
                onPress={handleRegister}
                >
                  <Text className='text-black'>Testar APi CAll</Text>
                </TouchableOpacity>
                <View className='flex flex-row items-center justify-center gap-5 mt-5'>
                      <Text className='text-white'>Já tens uma conta? </Text>
                      <TouchableOpacity className=' bg-[#FE8C00] rounded-xl pl-2 pr-2 h-10 items-center justify-around' 
                        onPress={()=>router.replace("/(auth)/Loguin")}
                      >
                        <Text className='text-white'>Entre aqui</Text>
                      </TouchableOpacity>

                </View>
          </View>
    </View>
  )
}

export default Register

