export interface EncryptService {
    
    encondePassword(password:string):Promise<String>,
    authpass(passEndcoded: string, hashingpass: string): Promise<boolean>
}