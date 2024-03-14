import { Pago } from "../dominio/pago";
import { PagoRepositorio } from "../dominio/pagoRepositorio";
import PagoModel from "./model/pagoModel";

export class SqlPagoRepositorio implements PagoRepositorio{
    async addPago(id_Pago: number, nombre: string, producto: string, tarjeta: string, precio: number): Promise<Pago | null> {
    try {
        const pagoCreado = await PagoModel.create({id_Pago,nombre,producto,tarjeta,precio});
        return new Pago(pagoCreado.id_Pago,pagoCreado.nombre,pagoCreado.producto,pagoCreado.tarjeta,pagoCreado.precio);
    } catch (error) {
        console.log("Error en sqlpago.repositorio en AddPago", error);
        return null;
    }    
    }
}