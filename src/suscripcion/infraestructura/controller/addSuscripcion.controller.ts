import { Request, Response } from "express";
import { AddSuscripcionCasoUso } from "../../aplicacion/addSuscripcion.CasoUso";

export class AddSuscripcionController{
    constructor(readonly addSuscripcionCasoUso:AddSuscripcionCasoUso){}
    async run(req:Request , res:Response){
        try {
            let{nombre_producto,password} = req.body;
            let suscripcionRegistrada = await this.addSuscripcionCasoUso.run(nombre_producto,password);

            if(suscripcionRegistrada){
                return res.status(200).send({
                    status:"success",
                    data:{
                        nombre_producto: suscripcionRegistrada.nombre_producto,
                        password: suscripcionRegistrada.password,
                    },
                    message:"Suscripción realizada"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al agregar la suscripción en el archivo addSuscripcion.controller"
                })
            }
        } catch (error) {
            console.log("Error en addSuscripcion.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
            
        }
    }
}