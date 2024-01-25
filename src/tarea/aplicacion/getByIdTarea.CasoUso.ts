import { Tarea } from "../dominio/tarea";
import { TareaRepository } from "../dominio/tareaRepository";

export class GetByIdTareaCasoUso {
  constructor(readonly tareaRepository: TareaRepository) {}

  async run(id: number): Promise<Tarea | null> {
    try {
      const result = await this.tareaRepository.getByIdTarea(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}