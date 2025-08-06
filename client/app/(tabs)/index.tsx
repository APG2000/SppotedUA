import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import SpottedUALogo from '../components/SpottedUALogo';
import SppotedCard from '../components/SppotedCard';
import data from '../mocks/SpottedMocksData';
const Tab = () => {
   
  return (
    
   <SafeAreaView className='flex flex-1  bg-black items-center' >
       
       
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
                    <View className='bg-white/20 w-30 pl-2 pr-2 h-10 items-center gap-2 justify-around rounded-xl flex flex-row'>
                        <AntDesign name="filter" size={20} color="white" />
                        <Text className='text-white'>Filtros</Text>
                    </View>
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
       
    </SafeAreaView>
  )
}

export default Tab