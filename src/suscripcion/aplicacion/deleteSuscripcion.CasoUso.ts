import { Suscripcion } from "../dominio/suscripcion";
import { SuscripcionRepository } from "../dominio/suscripcionRepository";

export class DeleteSuscripcionCasoUso{

    constructor(readonly suscripcionRepository : SuscripcionRepository){}
    async run(nombre:string):Promise<Suscripcion | null>{
        try {
            const eliminarSuscripcion = await this.suscripcionRepository.deleteSuscripcion(nombre);
            return eliminarSuscripcion;
        } catch (error) {  
            console.log("Error en deleteSuscripcion.CasoUso", error);
            return null;
        }
    }
}