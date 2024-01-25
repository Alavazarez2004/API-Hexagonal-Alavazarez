import { Alumno } from "../dominio/alumno";
import { AlumnoRepository } from "../dominio/alumnoRepository";

export class AddAlumnoCasoUso{
    constructor(readonly alumnoRepository: AlumnoRepository){}
    async run(id:number,nombre:string,apellidoPaterno:string,apellidoMaterno:string):Promise<Alumno | null>{
        try {
            const alumnoRegistrado = await this.alumnoRepository.addAlumno(id,nombre,apellidoPaterno,apellidoMaterno);
            return alumnoRegistrado;
        } catch (error) {
            console.log("Error en addAlumno.CasoUso", error);
            return null;
        }
    }
}