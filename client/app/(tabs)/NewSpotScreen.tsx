import React, { useEffect } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomInput from '../components/CustomInput'
import CustomBtn from '../components/CustomBtn'
import { Alert } from 'react-native'
const NewSpotScreen = () => {
  const router= useRouter();
  const [mockSelection, setMockSelection] = useState(["Cabelo Liso","Bonito" ,"Cabelo Cacheado","Cabelo Crespo","Cabelo Loiro"]);
  const mockSugestao=[
    "Cabelo Liso",
    "Bonito",
    "Cabelo Cacheado",
    "Cabelo Crespo",
    "Cabelo Loiro",
    "Olhos Azuis",
    "Olhos Castanhos",
    "Altura Media",
    "Altura Alta",
    "Altura Baixa"
  ]
  const [caracteristicaPersonalizada, setCaracteristicaPersonalizada] = useState("");
  const [descricao, setDescricao] = useState("");
  const [descricaoLength,setDescricaoLength]=useState(0);

 

  const handleAddCaracteristica = () => {

    if(caracteristicaPersonalizada.trim() === ""){
      return
    }
    if(mockSelection.includes(caracteristicaPersonalizada)){
      return
    }else{
      setMockSelection((prev)=>[...prev,caracteristicaPersonalizada]); setCaracteristicaPersonalizada(caracteristicaPersonalizada)
      //setCaracteristicaPersonalizada("");
    }
  }
   const handleRemoveCaracteristica = (item: string) => {
    setMockSelection((prev) => prev.filter((caracteristica) => caracteristica !== item));
  };
  const handleCriarSpot = () => {
   console.log(descricao)
   console.log(caracteristicaPersonalizada)
  } 

  useEffect(()=>{
    setDescricaoLength(descricao.length)

  },[descricao])
  return (
  <SafeAreaView className='flex flex-1 bg-black/95'>
    <View className="flex flex-row min-h-[10%] border-b border-b-white/10  items-center justtify-start  "> 
      <View className='flex flex-row items-center ml-10'>
        <TouchableOpacity className='text-white' onPress={()=>router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
              <View className='flex flex-col pl-10'>
                  <Text className='text-white text-2xl font-bold'>Criar Spot</Text>
                  <Text className='text-white text-xl  font-extralight'>Conte sobre quem voce viu</Text>
            </View>
      </View> 
    </View>
    <ScrollView contentContainerClassName='items-center justify-start gap-5 pt-5 pb-[30%]' showsVerticalScrollIndicator={false}>
          <View className='flex min-h-[30%] w-[95%] border  border-white/20 rounded-2xl  pl-5 pr-5 pb-5 pt-5 gap-2'>
            <Text className='text-white text-xl'>Descricao</Text>
            <View className='flex flex-1 min-h-40 border-white/10'>
              
              <CustomInput placeholder="Descreva a pessoa que você viu... seja respeitoso e específico! Ex: 'Vi uma pessoa muito simpática na biblioteca, cabelo cacheado, estava lendo um livro de programação"
                  value={descricao} 
                  onChangeText={setDescricao} 
                  label="descricao" 
                  secureTextEntry={false}
                  KeyboardType='default'
                  editable={true}
                  multiline={true}
                  numberOfLines={4}
                  clasName="border-white/20 border rounded-xl h-full pl-4 text-white"
                  />
            </View>
            <Text className='text-white  font-thin'>{descricaoLength}/300 caracteres</Text>
          </View>
          <View className='flex flex-col min-w-[95%]  w-[95%] border  border-white/20 rounded-2xl justify-evenly pl-5 pr-5 pb-5 pt-5 gap-2'>
              <Text className='text-white text-xl'>Localizacao</Text>
              <View className='flex bg-white/10 items-start justify-center rounded-xl pl-2 pr-2 pt-2 pb-2'>
                <Text className='text-white  font-extralight'>Onde voce viu essa pessoa ?</Text>
              </View>
          </View>
          <View className='flex flex-col  min-w-[95%]  w-[95%] border  border-white/20 rounded-2xl justify-evenly pl-5 pr-5 pb-5 pt-5 gap-5'>
              <Text className='text-white text-xl'>Características</Text>
              <Text className='text-white font-extralight'>Adicione até 5 características para ajudar na identificação</Text>
              <View className='flex flex-row flex-wrap gap-2'>
                  {mockSelection.map((item,index)=>{
                    return(
                      <View key={index} className='flex flex-row bg-white rounded-xl items-center gap-2 pl-3 pr-3 pt-1 pb-1'>
                        <Text className='text-black'>{item}</Text>
                        <TouchableOpacity key={index} onPress={()=>handleRemoveCaracteristica(item)}>
                          <Text className='text-red-500'> X </Text>
                        </TouchableOpacity>
                      </View>
                    
                    )
                  })}
              </View>
              <View className='flex flex-row items-center gap-2'>
                <View className='flex flex-1'>
                  <CustomInput placeholder='Adicionar caracteristica personalizada'
                  value={caracteristicaPersonalizada} 
                  onChangeText={setCaracteristicaPersonalizada} 
                  label="Caracteristica" 
                  secureTextEntry={false}
                  onSubmitEditing={handleAddCaracteristica}
                  KeyboardType='default'/>
                </View>
            
              </View>
              <Text className='text-white'>Sugestões:</Text>
              <View className='flex flex-row flex-wrap gap-2'>
                {mockSugestao.map((item, index) => (
                  <TouchableOpacity key={index} className='bg-white/10 rounded-xl pl-3 pr-3 pt-1 pb-1'>
                    <Text className='text-white font-thin'>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
          </View>
      <TouchableOpacity className='bg-[#FE8C00] w-[95%] items-center rounded-xl pl-5 pr-5 pt-5 pb-5' onPress={handleCriarSpot}>
        <Text className='text-white text-2xl font-bold'>Criar Spot</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  )
}

export default NewSpotScreen