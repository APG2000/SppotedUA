import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import SpottedUALogo from '../components/SpottedUALogo';
import SppotedCard from '../components/SppotedCard';
import data from '../mocks/SpottedMocksData';
import Modal from 'react-native-modal';
const Tab = () => {
  const [isVisible,setIsVisible] = useState(false)
    
  const handleFilter = async () =>{
    setIsVisible(false)

  }
  return (
    
   <SafeAreaView className='flex flex-1 items-center bg-black/95' >
       
       
        <FlatList
        data={data}
        keyExtractor={(index)=>index.userName}
        renderItem={(item)=>{
            return(
                <SppotedCard userName={item.item.userName} distance={item.item.distance} location={item.item.location} time={item.item.time} description={item.item.description} caracteristicas={item.item.caracteristicas} />
            )
        }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName='gap-4 '
        className='w-[97%] '
        ListHeaderComponent={()=>{

            return (
                <View className='border-b-2 border-b-white/20 h-20 flex flex-row  items-center justify-around '>
                   <SpottedUALogo />
                   
                 

                    <View className='flex flex-col'>
                        <Text className='text-white text-sm text-muted-foreground'>
                            Campus
                        </Text>
                        <Text className='text-white text-sm text-muted-foreground'>
                            Universitario
                        </Text>

                    </View>
                    <TouchableOpacity className='bg-white/20 w-30 pl-2 pr-2 h-10 items-center gap-2 justify-around rounded-xl flex flex-row'
                        onPress={()=>setIsVisible(true)}
                    >
                        <AntDesign name="filter" size={20} color="white" />
                        <Text className='text-white' >Filtros</Text>
                    </TouchableOpacity>
                </View>
                


            )
        }}
        ListFooterComponent={()=>{

            return(
                <View className='mt-20'>
                </View>
            )
        }}
        />
     <Modal isVisible={isVisible} onBackdropPress={()=>setIsVisible(false)}>
        <View className="flex h-[50%] rounded-2xl  items-center justify-around bg-black/95 border border-white/20">
          <Text className='text-white'>I am the modal content!</Text>
          <Text className='text-white'>I am the modal content!</Text>
          <Text className='text-white'>I am the modal content!</Text>
          <Text className='text-white'>I am the modal content!</Text>
          <Text className='text-white'>I am the modal content!</Text>
          <Text className='text-white'>I am the modal content!</Text>
          <Text className='text-white'>I am the modal content!</Text>
          <Text className='text-white'>I am the modal content!</Text>
          <Text className='text-white'>I am the modal content!</Text>
          <Text className='text-white'>I am the modal content!</Text>
        
          <TouchableOpacity className='bg-[#FE8C00]  w-32 h-10 items-center justify-around rounded-xl' onPress={handleFilter}>
            <Text className='text-white font-extrabold'>Save</Text>
          </TouchableOpacity>

        </View>
      </Modal>
       
    </SafeAreaView>
  )
}

export default Tab