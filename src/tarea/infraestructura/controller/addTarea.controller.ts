import { Request, Response } from "express";
import { AddTareaCasoUso } from "../../aplicacion/addTarea.CasoUso";

export class AddTareaController{
    constructor(readonly addTareaCasoUso:AddTareaCasoUso){}
    async run(req:Request , res:Response){
        try {
            let{id,nombre} = req.body;
            let tareaRegistrada = await this.addTareaCasoUso.run(id,nombre);

            if(tareaRegistrada){
                return res.status(200).send({
                    status:"success",
                    data:{
                        id: tareaRegistrada.id,
                        nombre: tareaRegistrada.nombre
                    },
                    message:"Tarea creada correctamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al agregar tarea en archivo addTarea.controller"
                })
            }
        } catch (error) {
            console.log("Error en addTarea.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
            
        }
    }
}