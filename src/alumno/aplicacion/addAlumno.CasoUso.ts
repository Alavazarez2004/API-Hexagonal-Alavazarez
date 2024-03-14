import { Alumno } from "../dominio/alumno";
import { AlumnoRepository } from "../dominio/alumnoRepository";

export class AddAlumnoCasoUso{
    constructor(readonly alumnoRepository: AlumnoRepository){}

    async run(id:number,nombre:string,password:string):Promise<Alumno | null>{
        try {
            const alumnoRegistrado = await this.alumnoRepository.addAlumno(id,nombre,password);
            return alumnoRegistrado;
        } catch (error) {
            console.log("Error en addAlumno.CasoUso", error);
            return null;
        }
    }
}