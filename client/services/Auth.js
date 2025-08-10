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
        const result = await axios.post(basePath+"/auth/register" , payload)

        if( result.status===201){
            return true
        }
     
    }catch(error){
        console.log("Erro na chamada",error.message)
        if(error.response){
          console.log(error)
        }
        return false
    }

}


export const Loguin=async(userName,password) => {

    try{

        const finalUrl=basePath+`/auth/loguin?username=${userName}&password=${password}`
        const result = await axios.post(finalUrl)
        return result.data

    }catch(error){
        if(error.response){
            console.log(error.response.status)
        }else{
            console.log(error.message)
        }
        return null
    }
}