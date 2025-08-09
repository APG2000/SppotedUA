import axios from 'axios';
import { useNavigation } from 'expo-router';
const basePath="http://172.20.10.2:8080"

export  const GetAllUsers = async () => {
    try {
        console.log("Iniciando chamada...");
        const result = await axios.get(basePath+"/getAllUsers");
        console.log(result.status);
        console.log(result.data);
    } catch (error) {
        console.error("Erro na chamada:", error.message);
        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
        }
    }
};


export const RegisterUser=async(payload,router)=>{
    try{
        const result = await axios.post(basePath+"/register" , payload)

        if(result.data && result.status===201){
            console.log("Data:",result.status)
            console.log("Data:",result.data)
            return true
        }
     
        


    }catch(error){
        console.log("Erro na chamada",error.message)
        if(error.response){
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
        }
        return false
    }

}
