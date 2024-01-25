import { Tarea } from "./tarea";

export interface TareaRepository{
    getAllTarea(): Promise<Tarea[] | null>;
    getByIdTarea(id: number): Promise<Tarea | null>;
    addTarea(id:number, nombre:string):Promise<Tarea | null>;
    deleteTarea(id:number):Promise<Tarea | null>;
}