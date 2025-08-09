import { images } from '@/constants';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
const _layout = () => {
  const UserLoggued=false

  if(!UserLoggued){
    return(
      <Redirect href={"/Loguin"}/>
    )
  }
  

  interface TabBarIconProps {
    focused: boolean;
    icon:ImageSourcePropType ;
    title: string;
    }

  const TabBar=({focused,icon,title}:TabBarIconProps)=>{

    return(
        <View className='flex flex-col mt-5 gap-2' >
            <Image source={icon}
                className='size-7'
                resizeMode='contain'
                tintColor={focused ? "#FE8C00": "#5D5F6D"}
            />
        </View>
    )
  }

  return (
    <Tabs 
      screenOptions={{
        tabBarStyle:{
          position:"absolute",
          backgroundColor:"black",
          borderTopColor:"black",
          borderTopEndRadius:20,
          borderTopLeftRadius:20
          
        }
        
        }}
        
    >
        <Tabs.Screen  
            name='index'
            options={{
                title:"Feed",
                headerShown:false,
                tabBarShowLabel:false,
                
                tabBarIcon:({focused})=>{
                    return(
                        <TabBar focused={focused} icon={images.home} title='Feed' />
                    )
                }
                
            }}
            
        />
             <Tabs.Screen
            name='NewSpotScreen'
            options={{
                title:"Spot",
                headerShown:false,
                tabBarShowLabel:false,
                tabBarIcon:({focused})=>{
                    return(
                        <TabBar focused={focused} icon={images.add} title='Spot' />
                    )
                }

                
            }}/>

        <Tabs.Screen
            name='Chat'
            options={{
                title:"Conversas",
                headerShown:false,
                tabBarShowLabel:false,
                 tabBarIcon:({focused})=>{
                    return(
                        <TabBar focused={focused} icon={images.chat} title='Chat' />
                    )
                }

                
            }}/>
        <Tabs.Screen
            name='Perfil'
            options={{
                title:"Perfil",
                headerShown:false,
                tabBarShowLabel:false,
                 tabBarIcon:({focused})=>{
                    return(
                        <TabBar focused={focused} icon={images.perfil} title='Perfil' />
                    )
                }


                
            }}
        />
      
    </Tabs>
  )
}

export default _layout