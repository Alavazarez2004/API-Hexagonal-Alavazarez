import { Alumno } from "./alumno";

export interface AlumnoRepository{
    getAllAlumno(): Promise<Alumno[] | null>;
    addAlumno(id:number, nombre:string, password:string):Promise<Alumno | null>;
    //deleteAlumno(id:number):Promise<Alumno | null>;
    deleteAlumno(nombre:string):Promise<Alumno | null>;
}