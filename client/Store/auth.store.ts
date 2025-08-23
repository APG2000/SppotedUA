import { Use } from 'react-native-svg'
import {create} from 'zustand'
import { Loguin } from '@/services/Auth'
interface User{
    username:string,
    token:string,
    roles:string[]
}


type AuthState={
    isAuthenticated:boolean,
    isLoading:boolean,
    setIsAuthenticated:(value:boolean)=>void
    setLoading:(loading:boolean) => void
    AuthenticateUSer:(userName:string,password:string)=>Promise<boolean>
    user:User | null
    setUser:(user:User|null) =>void
    

}


const useAuthStore = create<AuthState>((set)=>({
    isAuthenticated:false,
    user:null,
    isLoading:true,
    setIsAuthenticated:(value)=>set({isAuthenticated:value}),
    setUser:(user) =>set({user}),
    setLoading:(value)=>set({isLoading:value}),

    AuthenticateUSer:async (userName,password)=>{
        set({isLoading:true})

        try{

            const user = await Loguin(userName,password)
            if(user){
                set({isAuthenticated:true,user:user as User})
                return true

            }else{
                set({isAuthenticated:false,user:null})
                return false
            }
        }catch(error){
         console.log('fetchAuthenticatedUser error ',error)
         set({isAuthenticated:false,user:null}) 
         return false
        }finally{
            set({isLoading:false})
        }
    }


}))

export default useAuthStore