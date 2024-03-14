import { IEncriptServices } from "../../aplicacion/services/EncripService";
import bycript from 'bcrypt';

export class EncripServiceHelpers implements IEncriptServices{
    encodeTarjeta(tarjeta: string): Promise<string> {
        const slats = 10;
        let numtarjeta = bycript.hash(tarjeta,slats);
        return numtarjeta;
    }

    autTarjeta(tarjetaEncode: string, hashingTarjeta: string): Promise<boolean> {
        let result = bycript.compare(tarjetaEncode, hashingTarjeta);
        return result;
    }
}