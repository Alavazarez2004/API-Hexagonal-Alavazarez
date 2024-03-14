import { Suscripcion } from "../dominio/suscripcion";
import { SuscripcionRepository } from "../dominio/suscripcionRepository";
import { EncriptPass } from "../infraestructura/Helpers/EncriptPass";

export class AddSuscripcionCasoUso{
    constructor(readonly suscripcionRepository: SuscripcionRepository, readonly EncriptPass: EncriptPass){}

    async run(nombre_producto:string, password:string):Promise<Suscripcion | null>{
        try {
            const EncriptPass = await this.EncriptPass.encondePassword(password);
            const suscripcionRegistrada = await this.suscripcionRepository.addSuscripcion(nombre_producto,password);
            return suscripcionRegistrada;
        } catch (error) {
            console.log("Error en addSuscripcion.CasoUso", error);
            return null;
        }
    }
}