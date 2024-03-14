import { Suscripcion } from "../dominio/suscripcion";
import { SuscripcionRepository } from "../dominio/suscripcionRepository";
import SuscripcionModel from "./model/suscripcion.model";

export class MysqlSuscripcionRepository implements SuscripcionRepository{

    async getAllSuscripcion(): Promise<Suscripcion[] | null> {
        try {
            const suscripciones = await SuscripcionModel.findAll();

            if (!suscripciones || suscripciones.length === 0) {
                return null;
            }

            return suscripciones.map(suscripcion => new Suscripcion(suscripcion.id, suscripcion.nombre_producto, suscripcion.password));
        } catch (error) {
            console.log("Error en mysqlSuscripcion.repository en GetAllSuscripcion", error);
            return null;
        }
    }
    
    async addSuscripcion(nombre_producto: string, password:string,): Promise<Suscripcion | null> {
        try {
            const suscripcionRegistrada = await SuscripcionModel.create({
                nombre_producto: nombre_producto,
                password: password
            });
            return new Suscripcion(suscripcionRegistrada.id, suscripcionRegistrada.nombre_producto, suscripcionRegistrada.password)
        } catch (error) {
            console.log("Error en mysqlSuscripcion.repository", error);
            return null;
        }
    }


    async deleteSuscripcion(nombre_producto: string): Promise<Suscripcion | null> {
        try {
            const suscripcionEliminada = await SuscripcionModel.findOne({ where: { nombre_producto: nombre_producto } });
            if(suscripcionEliminada){
                await suscripcionEliminada.destroy();
                return new Suscripcion(suscripcionEliminada.id,suscripcionEliminada.nombre_producto, suscripcionEliminada.password);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en mysqlSuscripcion.repository", error);
            return null;
        }
    }
    
}