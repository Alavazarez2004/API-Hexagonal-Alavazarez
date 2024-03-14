import { EncryptService } from "../../aplicacion/services/EncryptService";
import bcrypt from 'bcrypt';

export class EncriptPass implements EncryptService {
    encondePassword(pass: string): Promise <string>{
        const vecesEncriptado = 10;
        let passEndcoded = bcrypt.hash(pass, vecesEncriptado);
        return passEndcoded;
    }

    authpass(passEndEncode: string, hashingpass: string): Promise<boolean> {
        let resultado = bcrypt.compare(passEndEncode, hashingpass);
        return resultado;
    }
}