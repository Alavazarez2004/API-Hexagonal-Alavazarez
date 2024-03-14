import { Alumno } from "../dominio/alumno";
import { AlumnoRepository } from "../dominio/alumnoRepository";

export class DeleteAlumnoCasoUso{

    constructor(readonly alumnoRepository:AlumnoRepository){}
    async run(nombre:string):Promise<Alumno | null>{
        try {
            const eliminarAlumno = await this.alumnoRepository.deleteAlumno(nombre);
            return eliminarAlumno;
        } catch (error) {  
            console.log("Error en deleteAlumno.CasoUso", error);
            return null;
        }
    }
}