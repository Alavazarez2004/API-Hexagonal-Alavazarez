import { Tarea } from "../dominio/tarea";
import { TareaRepository } from "../dominio/tareaRepository";

export class DeleteTareaCasoUso{
    constructor(readonly tareaRepository:TareaRepository){}
    async run(id:number):Promise<Tarea | null>{
        try {
            const eliminarTarea = await this.tareaRepository.deleteTarea(id);
            return eliminarTarea;
        } catch (error) {  
            console.log("Error en deleteTarea.Caso.Uso", error);
            return null;
        }
    }
}