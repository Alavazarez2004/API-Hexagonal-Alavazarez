export interface IEncryptService {
    
    encondePassword(contraseña:string):string
    authPassword(word: string,passwordEncode: string): boolean
}