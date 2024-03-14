import { Request, Response } from "express";
import { AddPagoCasoUso } from "../../aplicacion/addPagoCasoUso";

export class AddPagoController{
    constructor(readonly addPagoCasoUso: AddPagoCasoUso){}
    async run (req:Request, res:Response){
        try {
            let id_Pago = req.body.id_Pago;
            let nombre = req.body.nombre;
            let producto = req.body.producto;
            let tarjeta = req.body.tarjeta;
            let precio = req.body.precio;
            console.log(req.body);
            

            let pagoCreado = await this.addPagoCasoUso.run(id_Pago,nombre,producto,tarjeta,precio);

            if (pagoCreado) {
                return res.status(200).send({
                    status:"success",
                    data:{
                        id_Pago: pagoCreado.id_Pago,
                        nombre: pagoCreado.nombre,
                        producto: pagoCreado.producto,
                        tarjeta: pagoCreado.tarjeta,
                        precio: pagoCreado.precio,
                    },
                    message:"Pago realizado"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error en realizar el pago en el archivo addPago.controller"
                })
            }
        } catch (error) {
            console.log("Error en addPago.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
            
        }
    }
}