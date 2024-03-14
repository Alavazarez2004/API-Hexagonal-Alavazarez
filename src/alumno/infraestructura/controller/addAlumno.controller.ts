import { Request, Response } from "express";
import { AddAlumnoCasoUso } from "../../aplicacion/addAlumno.CasoUso";

export class AddAlumnoController{
    constructor(readonly addAlumnoCasoUso:AddAlumnoCasoUso){}
    async run(req:Request , res:Response){
        try {
            let{id,nombre,password} = req.body;
            let alumnoRegistrado = await this.addAlumnoCasoUso.run(id,nombre,password);

            if(alumnoRegistrado){
                return res.status(200).send({
                    status:"success",
                    data:{
                        id: alumnoRegistrado.id,
                        nombre: alumnoRegistrado.nombre,
                        contraseña: alumnoRegistrado.password
                    },
                    message:"Alumno agregado correctamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al agregar un alumno en el archivo addAlumno.controller"
                })
            }
        } catch (error) {
            console.log("Error en addAlumno.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
            
        }
    }
}