import { View, Text, TouchableOpacity, SectionList, FlatList, Pressable, Alert ,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import  caracteristicasPorCategoria  from '../mocks/CaracteristicasMock'
import CustomBtn from '../components/CustomBtn'
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
const RegisterDetails = () => {

  const [idx,setIdx]=useState(0);
  const [data,setData]=useState(caracteristicasPorCategoria[0]);
  const [selecionados, setSelecionados] = useState<number[]>([]);

  const handleSelect = (id:number) => {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };
  const handleNextData = ()=>{
    if(idx === caracteristicasPorCategoria.length-1){
      Alert.alert("Sem mais forms ")
      return
    }
    setIdx(idx+1);
  //  console.log(idx)
  }

  useEffect(()=>{
    setData(caracteristicasPorCategoria[idx])
    // setSelecionados([])

    // Bug aqui , quando vai para proxima categoria os idx ainda ficam ativos
  },[idx])









  const router = useNavigation()
  return (
    <View className='flex flex-1 mt-10  w-full   gap-10 '>
     <View className='flex-col  items-center'>
          <Text className='text-white font-extrabold text-xl'>Fale mais sobre voce </Text>
          <Text className='text-white font-extralight text-center'>Ajuda-nos a conhecer-te melhor para conectares com outros estudantes com mais facilidade</Text>
      
      
      </View>
          <View className='flex flex-col '>
              <View className='flex flex-row  justify-between pr-3 pt-2 pb-2 pl-3'>
                <Text className='text-white'>Passo {idx} de {caracteristicasPorCategoria.length-1}</Text>
                <Text className='text-white'>{(idx/(caracteristicasPorCategoria.length-1)*100).toFixed(2)}% completo</Text>


              </View>
               <Progress.Bar progress={idx/(caracteristicasPorCategoria.length-1)}  width={200} color='white' className='mt-3 self-center'/>

          </View>      
      <View className='flex flex-1  rounded-tr-2xl rounded-tl-2xl  self-center  w-[90%]'>  
        <View className='bg-[#FE8C00]/90 h-20 rounded-tr-2xl rounded-tl-2xl  justify-around  '>
            <View className='flex flex-row items-center  justify-evenly' >
              <View >
                   <Image
                      source={require("@/assets/images/setting.png")}
                      className='w-12 h-10'
                      tintColor={"white"}
                      resizeMode="contain"
                />
              </View>
              <View className='flex flex-col'>
                <Text className='font-extrabold text-white'>
                  {data.categoria}
                </Text>
                <Text className='text-white font-extralight'>
                  Seleciona todas as opções que se aplicam a ti
                </Text>

              </View>
            

            </View>
        </View>
        
        <View className='flex items-center  gap-2 mt-4'>

          <FlatList 
            data={data.opcoes}
            keyExtractor={(index)=>index}
            contentContainerClassName=' flex-col  gap-2 mt-2'
            className='w-full'
            showsVerticalScrollIndicator={false}            
            renderItem={(item)=>{
                  const ativo = selecionados.includes(item.index);
              return(
              <TouchableOpacity
                  className={`flex items-center justify-around rounded-xl w-full h-20 ${
                    ativo ? 'bg-white' : 'bg-black'
                  }`}
                  onPress={() => handleSelect(item.index)}
                >
                  <Text className={ativo ? 'text-black' : 'text-white'}>
                    {item.item}
                  </Text>
            </TouchableOpacity>
              )
            }}
            
          
          />
          
          {/* {caracteristicasPorCategoria[0].opcoes.map((item,index)=>{
            return(

                  <Text className='bg-black/95 text-white h-20 w-full rounded-xl text-center pt-5' key={index}>{item}</Text>

            )

          })

          } */}
        

        </View>
  

      </View>

     <View className='flex-row items-center justify-around mt-20 '>
                      <CustomBtn title='Depois faço isso' onPress={()=>Alert.alert("ola")}/>
                      <CustomBtn title='Continuar' onPress={handleNextData}/>


      </View>
      <TouchableOpacity onPress={()=>router.goBack()}>
        <Text className='text-white bg-red-300 w-20 rounded-2xl h-5 text-center justify-around'>
          Voltar
        </Text>
      
      </TouchableOpacity>
    </View>
  )
}

export default RegisterDetails