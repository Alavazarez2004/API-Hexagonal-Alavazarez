import { Alumno } from "../dominio/alumno";
import { AlumnoRepository } from "../dominio/alumnoRepository";

export class DeleteAlumnoCasoUso{
    constructor(readonly alumnoRepository:AlumnoRepository){}
    async run(id:number):Promise<Alumno | null>{
        try {
            const eliminarAlumno = await this.alumnoRepository.deleteAlumno(id);
            return eliminarAlumno;
        } catch (error) {  
            console.log("Error en deleteAlumno.Caso.Uso", error);
            return null;
        }
    }
}