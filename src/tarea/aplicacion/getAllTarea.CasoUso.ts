import { Tarea } from "../dominio/tarea";
import { TareaRepository } from "../dominio/tareaRepository";

export class GetAllTareaCasoUso {
  constructor(readonly tareaRepository: TareaRepository) {}

  async run(): Promise<Tarea[] | null> {
    try {
      const result = await this.tareaRepository.getAllTarea();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
