export interface CustomInputProps{
    placeholder?:string,
    value?:string,
    onChangeText?:(text:string) =>void,
    label:string,
    secureTextEntry?:boolean,
    KeyboardType:"default" | "email-address" | "numeric" | "phone-pad"
}