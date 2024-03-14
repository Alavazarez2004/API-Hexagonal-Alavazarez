import { Suscripcion } from "../dominio/suscripcion";
import { SuscripcionRepository } from "../dominio/suscripcionRepository";

export class GetAllSuscripcionCasoUso {
  constructor(readonly suscripcionRepository: SuscripcionRepository) {}

  async run(): Promise<Suscripcion[] | null> {
    try {
      const result = await this.suscripcionRepository.getAllSuscripcion();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
