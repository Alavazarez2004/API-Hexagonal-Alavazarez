import { Request, Response } from "express";
import { DeleteTareaCasoUso } from "../../aplicacion/deleteTarea.CasoUso";

export class DeleteTareaController{
    constructor(readonly deleteTareaCasoUso:DeleteTareaCasoUso){}
    async run(req:Request, res:Response){
        try {
            let id = req.body.id;
            console.log(req.body);

            let tareaEliminada = await this.deleteTareaCasoUso.run(id);

            if(tareaEliminada){
                res.status(200).send({
                    message:"Tarea eliminada exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al eliminar tarea en deleteTarea.controller"
                })
            }

        } catch (error) {
            console.log("Error en deleteTarea.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    } 
}