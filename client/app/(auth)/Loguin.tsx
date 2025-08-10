import { Link, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Alert, KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import SpottedUALogo from '../components/SpottedUALogo'
import CustomInput from '../components/CustomInput'
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'
import { Loguin as LoguinService } from '@/services/Auth'
import CustomModalAnimation from '../components/CustomModalAnimation'
import cautionAnimation from '../../assets/images/caution.json'
import useAuthStore from '@/Store/auth.store'

const Loguin = () => {
    const router = useRouter();
    const [form,setForm] = useState({username:'',password:""})
    const [errorModal,setErrorModal]=useState(false)
    const [modalTitle,setModalTitle]=useState("")
    const [modalSubTitle,setmodalSubTitle]=useState("")


    const {AuthenticateUSer,isAuthenticated,user} = useAuthStore();


    const handleLoguin = async ()=>{
        if((form.username || form.password) === ""){
            setModalTitle("Por favor")
            setmodalSubTitle('Preenche corretamente o formulario')
            setErrorModal(true)
            setTimeout(()=>{
                setErrorModal(false)
            },2500)
            return
        }
        
         AuthenticateUSer(form.username,form.password)
       
    //    const operation =await LoguinService(form.username,form.password)

    //    if(operation===true){
    //     router.replace("/")
    //    }else{
    //         setModalTitle("Ops!")
    //         setmodalSubTitle('Palavra Passe ou UserName errado')
    //         setErrorModal(true)
    //         setTimeout(()=>{
    //             setErrorModal(false)
    //         },2500)
    //    }
    }


    useEffect(()=>{
       // if(isAuthenticated){
       //     router.replace("/")s
       // }
     
    },[isAuthenticated])



  return (
    

        <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='flex flex-1 w-full h-full items-center justify-around'>
         
          <LottieView 
            source={require("@/assets/images/social_media_network.json")}
                    
            style={{
                width:200,
                height:200,
                alignSelf:"flex-start",
                
            
            }}
            autoPlay loop />
          
            <Text className='text-white font-extrabold text-3xl'> Login</Text>
            <View className='  h-[65%] w-[95%] rounded-xl pl-2 pr-2 pt-2 pb-2  justify-center'>

            <View className='flex flex-col mt-10 gap-5 pl-2 pr-2'>
                
                <CustomInput placeholder='Insira o teu email' value={form.username} onChangeText={(text)=>setForm((prev)=>({...prev,username:text}))} label="UserName" secureTextEntry={false} KeyboardType='default'/>
                <CustomInput placeholder='Insira a tua password' value={form.password} onChangeText={(text)=>setForm((prev)=>({...prev,password:text}))} label="Password" secureTextEntry={true} KeyboardType='default'/>

                {/*<TextInput className='border border-white/20 h-[20%] text-white  pl-2 rounded-xl' placeholder='Insira a tua senha'   placeholderTextColor={"gray"}/> */} 

            </View>
            <View className='flex items-center mt-10 gap-4'>
                <Pressable  onPress={handleLoguin} style={
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
                <Text className='text-white mt-5 font-light'>🔒 Suas interações são 100% anônimas</Text>
                {/* <View className='  flex flex-row gap-2 mt-5'>  
                    <Text className='text-white font-bold border-b-2 w-26 pl-2 pr-2 pt-2 pb-2 rounded-lg  border-b-[#FE8C00] '>Seguro</Text>
                    <Text className='text-white font-bold border-b-2 w-26 pl-2 pr-2 pt-2 pb-2 rounded-lg  border-b-[#FE8C00] '>Anônimo</Text>
                    <Text className='text-white font-bold border-b-2 w-26 pl-2 pr-2 pt-2 pb-2 rounded-lg  border-b-[#FE8C00] '>Universitario</Text>


                </View> */}
                <View className='flex flex-row items-center  mt-2 justify-center gap-2'>
                
                <Text className='text-white font-extrabold text-2xl'>Nao tens uma conta? </Text>
                <Link href={"/(auth)/Register"} className='text-white font-extrabold text-2xl border-b-2 border-b-[#FE8C00]'>Crie aqui</Link>
            </View>
         
            </View>
           
            
          


            </View>
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
               

        </KeyboardAvoidingView>
        
     
  )
}

export default Loguin