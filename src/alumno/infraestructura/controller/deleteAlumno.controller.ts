import { Request, Response } from "express";
import { DeleteAlumnoCasoUso } from "../../aplicacion/deleteAlumno.CasoUso";

export class DeleteAlumnoController{
    constructor(readonly deleteAlumnoCasoUso:DeleteAlumnoCasoUso){}
    async run(req:Request, res:Response){
        try {
            let id = req.body.id;
            console.log(req.body);

            let alumnoEliminado = await this.deleteAlumnoCasoUso.run(id);

            if(alumnoEliminado){
                res.status(200).send({
                    message:"Alumno eliminado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al eliminar alumno en deleteAlumno.controller"
                })
            }

        } catch (error) {
            console.log("Error en deleteAlumno.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    } 
}