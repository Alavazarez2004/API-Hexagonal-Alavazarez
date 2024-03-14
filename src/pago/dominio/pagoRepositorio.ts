import { Pago } from "./pago";

export interface PagoRepositorio{
    addPago(id_Pago: number, nombre: string , producto : string , tarjeta : string , precio: number) : Promise <Pago | null>;
}