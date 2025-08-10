import { View, Text, ImageSourcePropType } from 'react-native'
import React from 'react'
import  Modal  from 'react-native-modal'
import LottieView, { AnimationObject } from 'lottie-react-native'
interface CustomModalProps{
    isVisible:boolean,
    title?:string,
    subTitle?:string,
    width:number,
    height:number,
    animation:AnimationObject,
    backdropColor:string
    onModalHide?:()=>void
    titleColor?:string
    subtitleColor?:string
    titleSize?:string
    subTitleSize?:string
}


const CustomModalAnimation = (
  {isVisible,
    title,
    subTitle,
    width,height
    ,animation,
    backdropColor,
    onModalHide,
    subtitleColor,
    titleColor,
    titleSize,
    subTitleSize
  }:CustomModalProps) => {
    
  return (
    
     <Modal
      isVisible={isVisible}
      backdropColor={backdropColor}
      backdropOpacity={1} 
      animationOut={"fadeOutLeft"}
      onModalHide={onModalHide}
      >
            <View className='flex flex-1 items-center justify-center'>
                <LottieView 
                        source={animation}
                                
                        style={{
                            width:width,
                            height:height,
                            alignSelf:"flex-start",
                            
                        }}
                        autoPlay loop />
  
                <View>
                  <Text 
                  className={`${titleColor?`text-${titleColor}`:'text-white'} text-center ${titleSize?`text-${titleSize}`:'text-sm'} `}
                  >{title} </Text>
                  <Text 
                   className={`${subtitleColor?`text-${subtitleColor}`:'text-white'} text-2xl ${subTitleSize?`text-${subTitleSize}`:'text-sm'}` }
                   >{subTitle}</Text>
                </View>
      
              </View>
             
          </Modal>
  )
}




export default CustomModalAnimation