export interface CustomInputProps{
    placeholder?:string,
    value?:string,
    onChangeText?:(text:string) =>void,
    label:string,
    secureTextEntry?:boolean,
    KeyboardType:"default" | "email-address" | "numeric" | "phone-pad"
    onSubmitEditing?:()=>void
    editable?:boolean
    multiline?:boolean
    numberOfLines?:number
    clasName?:string
}

export interface RegisterUserDataProps{
      name:string,
      anonymousName:string,
      email:string,
      password:string,
      genero:"Masculino" | "Feminino",
      dataNascimento:string,
      curso:string,
      altura:string,
      nacionalidade:string,

}

export interface UserCharacteristics{
    characteristics:string[]
}