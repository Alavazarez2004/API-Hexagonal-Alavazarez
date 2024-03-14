import { Suscripcion } from "./suscripcion";

export interface SuscripcionRepository{
    getAllSuscripcion(): Promise<Suscripcion[] | null>;
    addSuscripcion(nombre_producto:string, password:string):Promise<Suscripcion | null>;
    //deleteMaterial(id:number):Promise<Material | null>;
    deleteSuscripcion(nombre_producto:string):Promise<Suscripcion | null>;
}