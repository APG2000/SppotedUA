import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import EvilIcons from '@expo/vector-icons/EvilIcons';
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
        <View className='bg-red-500 border rounded-xl pt-2 pb-2 pl-2 pr-2'>
           <Image source={require("../../assets/images/favicon.png")} resizeMode="contain" />
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
          <View className='border rounded-xl pl-2 pr-2 border-white/20 items-center mt-1'>
            <Text className='text-white'>
                        {distance}m
              </Text>
          </View>
          <View className='flex flex-row items-center gap-2 mt-1'>
            <AntDesign name="clockcircleo" size={15} color="white" />
            <Text className='text-white'>
                        {time.replace("m"," min")}
            </Text>
          </View>
         
        </View>
      
      
      </View>
        <Text className='text-white  font-semibold' >
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
                   <Text className='text-white bg-gray-700 border-white/20 border pl-2 pr-2 pt-2 pb-2 rounded-xl' key={index}>
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

          <View className='border border-white/20 pl-2 pr-2 pt-2 pb-2 rounded-xl bg-black'>
            <Text className='text-white '> É voce?</Text>
          </View>


        </View>

    </View>
  )
}

export default SppotedCard