import { Tarea } from "../dominio/tarea";
import { TareaRepository } from "../dominio/tareaRepository";

export class AddTareaCasoUso{
    constructor(readonly tareaRepository: TareaRepository){}
    async run(id:number,nombre:string):Promise<Tarea | null>{
        try {
            const tareaRegistrada = await this.tareaRepository.addTarea(id,nombre);
            return tareaRegistrada;
        } catch (error) {
            console.log("Error en addTarea.CasoUso", error);
            return null;
        }
    }
}