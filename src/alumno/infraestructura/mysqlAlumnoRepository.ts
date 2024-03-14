import { Alumno } from "../dominio/alumno";
import { AlumnoRepository } from "../dominio/alumnoRepository";
import AlumnoModel from "./model/alumno.model";

export class MysqlAlumnoRepository implements AlumnoRepository{

    async getAllAlumno(): Promise<Alumno[] | null> {
        try {
            const alumnos = await AlumnoModel.findAll();

            if (!alumnos || alumnos.length === 0) {
                return null;
            }

            return alumnos.map(alumno => new Alumno(alumno.id, alumno.nombre, alumno.password));
        } catch (error) {
            console.log("Error en mysqlAlumno.repository en GetAllAlumno", error);
            return null;
        }
    }
    
    async addAlumno(id: number, nombre: string, password:string): Promise<Alumno | null> {
        try {
            const alumnoRegistrado = await AlumnoModel.create({id,nombre,password});
            return new Alumno(alumnoRegistrado.id, alumnoRegistrado.nombre, alumnoRegistrado.password)
        } catch (error) {
            console.log("Error en mysqlAlumno.repository", error);
            return null;
        }
    }


    async deleteAlumno(nombre: string): Promise<Alumno | null> {
        try {
            const alumnoEliminado = await AlumnoModel.findOne({ where: { nombre: nombre } });
            if(alumnoEliminado){
                await alumnoEliminado.destroy();
                return new Alumno(alumnoEliminado.id,alumnoEliminado.nombre, alumnoEliminado.password);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en mysqlAlumno.repository", error);
            return null;
        }
    }
    
}