import { Alumno } from "./alumno";

export interface AlumnoRepository{
    getAllAlumno(): Promise<Alumno[] | null>;
    addAlumno(id:number, nombre:string, apellidoPaterno:string, apellidoMaterno:string):Promise<Alumno | null>;
    deleteAlumno(id:number):Promise<Alumno | null>;
}