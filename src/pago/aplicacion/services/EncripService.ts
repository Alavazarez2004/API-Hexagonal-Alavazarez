export interface IEncriptServices{
    encodeTarjeta(tarjeta: string): Promise<string>;
    autTarjeta(tarjetaEncode: string, hashingTarjeta: string): Promise<boolean>;
}