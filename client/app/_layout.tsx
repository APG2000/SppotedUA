import { Stack } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
export default function RootLayout() {
   
  return (
    
    <View className="flex flex-1 ">
    <Stack 
    screenOptions={{
      headerShown:false
      
    }}
    
    >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)" options={{headerShown:false}}/>
      

    </Stack>

    </View>

  )
}
