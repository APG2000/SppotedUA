import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import CustomInput from '../components/CustomInput'
import { Platform } from 'react-native'
import { RegisterUser } from '@/services/Auth'
import LottieView from 'lottie-react-native'
import CustomModalAnimation from '../components/CustomModalAnimation'


import cautionAnimation from '../../assets/images/caution.json'

const Register = () => {
  const router=useRouter();
  const [errorModal,setErrorModal]=useState(false)
  const [modalTitle,setModalTitle]=useState("")
  const [modalSubTitle,setmodalSubTitle]=useState("")

  const [form,setForm] = useState(
    {
      name:"",
      email:"",
      password:"",
      curso:"",
    }
  )
  
             
  const handleRegister=async () =>{

    if(form.email==="" || form.password ==="" || form.curso==="" || form.name === ""){
      setModalTitle('Por favor')
      setmodalSubTitle('Preenche corretamente o formulario')
      setErrorModal(true)
      setTimeout(()=>{
        setErrorModal(false)
      },2000)
      return
    }
 
    const operation=await RegisterUser(form, router)
    if(operation===true){
      router.navigate("/(auth)/RegisterDetails")
    }else{
      setModalTitle('Ops!')
      setmodalSubTitle('Já existe um user com esse UserName')
      setErrorModal(true)
       setTimeout(() => {
        setErrorModal(false)
      }, 2500);
     
    }



    
  }
  return (
   
    <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
     className='flex flex-col w-full h-full'
     >
          <View className='rounded-xl pl-5 pr-5 justify-around '>
                <LottieView 
                  source={require("@/assets/images/create_account.json")}
                          
                  style={{
                      width:200,
                      height:200,
                      alignSelf:"center"
                    
                  }}
                  autoPlay loop />
                <View className='flex flex-col  justify-around gap-2  '>
                  <CustomInput placeholder='Insira o teu UserName' value={form.name} onChangeText={(text)=>setForm((prev)=>({...prev,name:text}))} label="UserName" secureTextEntry={false} KeyboardType='default' />

                  <CustomInput placeholder='Insira o teu email' value={form.email} onChangeText={(text)=>setForm((prev)=>({...prev,email:text}))} label="Email" secureTextEntry={false} KeyboardType='email-address' />
                  <CustomInput placeholder='Insira a tua password' value={form.password} onChangeText={(text)=>setForm((prev)=>({...prev,password:text}))} label="Password" secureTextEntry={true} KeyboardType='default'/>
                  <CustomInput placeholder='Que curso Fazes?' value={form.curso} onChangeText={(text)=>setForm((prev)=>({...prev,curso:text}))} label="Curso" secureTextEntry={false} KeyboardType='default'/>
               

                  <TouchableOpacity className='flex self-center bg-white border border-white w-[50%] mt-[5%] h-[8%] items-center justify-center rounded-sm'
                    onPress={handleRegister}
                   >
                  <Text className='text-black'>Prosseguir</Text>
                  </TouchableOpacity>

                  <View className='flex flex-row items-center justify-center gap-5 mt-5'>
                      <Text className='text-white font-extrabold text-2xl '>Já tens uma conta? </Text>
                      <TouchableOpacity className='border-b-2 border-b-[#FE8C00] rounded-xl pl-2 pr-2 h-10 items-center justify-around' 
                        onPress={()=>router.replace("/(auth)/Loguin")}
                      >
                        <Text className='text-white font-extrabold text-2xl '>Entre aqui</Text>
                      </TouchableOpacity>

                  </View>
                </View>
                
             
          </View>
        <View>
        
      
        <CustomModalAnimation 
          isVisible={errorModal} 
          title={modalTitle} 
          subTitle={modalSubTitle}
          width={200}
          height={200}
          animation={cautionAnimation}
          backdropColor="black"
          titleColor='white'
          subtitleColor='white'
          titleSize='3xl'
          subTitleSize='text-2xl'
          />
       
          
      </View>
    
        
    </KeyboardAvoidingView>
    
  )
}

export default Register

