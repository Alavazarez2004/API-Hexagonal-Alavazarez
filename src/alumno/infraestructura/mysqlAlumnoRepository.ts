import { Alumno } from "../dominio/alumno";
import { AlumnoRepository } from "../dominio/alumnoRepository";
import AlumnoModel from "./model/alumno.model";

export class MysqlAlumnoRepository implements AlumnoRepository{

    async addAlumno(id: number, nombre: string, apellidoPaterno:string, apellidoMaterno:string): Promise<Alumno | null> {
        try {
            const alumnoRegistrado = await AlumnoModel.create({id,nombre,apellidoPaterno,apellidoMaterno});
            return new Alumno(alumnoRegistrado.id, alumnoRegistrado.nombre, alumnoRegistrado.apellidoPaterno, alumnoRegistrado.apellidoMaterno)
        } catch (error) {
            console.log("Error en mysqlAlumno.repository", error);
            return null;
        }
    }

    async deleteAlumno(id: number): Promise<Alumno | null> {
        try {
            const alumnoEliminado = await AlumnoModel.findOne({where: {id:id}});
            if(alumnoEliminado){
                await alumnoEliminado.destroy();
                return new Alumno(alumnoEliminado.id,alumnoEliminado.nombre, alumnoEliminado.apellidoPaterno, alumnoEliminado.apellidoMaterno);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en mysqlAlumno.repository en DeleteAlumno", error);
            return null;
        }
    }
}