import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import EvilIcons from '@expo/vector-icons/EvilIcons';
import data from '../mocks/SpottedMocksData';
interface SppotedCardType{
  userName:string,
  distance:string,
  location:string,
  time:string
  description:string,
  caracteristicas:string[]
}


const SppotedCard = (props:SppotedCardType) => {
  const {userName,distance,location,time,description,caracteristicas}=props
  return (
    <View className=' bg-black  flex border border-white/20 rounded-xl gap-2 pl-2 pt-3 pb-3 ' >
      <View className='flex flex-row gap-3 '>
        <View className='bg-white/15 border rounded-full pt-2 pb-2 pl-2 pr-2'>
           <Image source={require("../../assets/images/user.png")} resizeMode="contain" className='w-10 h-10' />
        </View>
        <View className='flex flex-col gap-1'>
          <Text className='text-white font-extrabold text-xl'>
                {userName}
          </Text>
           <Text className='text-white/50 text-sm'>
                {location}
          </Text>
        </View>

         <View className='flex flex-col gap-1'>
          <View className='border rounded-xl pl-2 pr-2 bg-white/20  items-center mt-1'>
            <Text className='text-white'>
                        {distance}m
              </Text>
          </View>
          <View className='flex flex-row items-center gap-1 mt-1'>
            <AntDesign name="clockcircleo" size={12} color="white" />
            <Text className='text-white'>
                        {time.replace("m"," min")}
            </Text>
          </View>
         
        </View>
      
      
      </View>
        <Text className='text-white font-light text-2sm' >
         {description}
        </Text>
        <View className='flex flex-row  mt-2 pb-2'>

          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName='gap-2'

          >
               {
            caracteristicas?.map((item,index)=>{
              return(
                   <Text className='text-white  border-b-[#FE8C00]/20 border pl-2 pr-2 pt-2 pb-2 rounded-xl' key={index}>
                        {item}
                    </Text>
         
              )
            })
          }
       

          </ScrollView>
       
        </View>
        <View className='flex flex-row items-center justify-around'>
          <View className='flex flex-row items-center gap-1'>
            <AntDesign name='heart' size={20} color={"red"}/>
            <Text className='text-white'> 9</Text>

          </View>
          <View className='flex flex-row'>
            <EvilIcons name="comment" size={24} color="white" />
            <Text className='text-white'> Comentarios</Text>

          </View>

        <View className='border border- pl-2 pr-2 pt-2 pb-2 rounded-xl items-center bg-[#FE8C00]/100 w-[30%] self-center '>
              <Text className='text-white '> Talvez seja eu</Text>
            
        </View>
                
        </View>


  
        
    </View>
  )
}

export default SppotedCard