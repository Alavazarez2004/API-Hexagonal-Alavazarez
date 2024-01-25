import { Alumno } from "../dominio/alumno";
import { AlumnoRepository } from "../dominio/alumnoRepository";

export class GetAllAlumnoCasoUso {
  constructor(readonly alumnoRepository: AlumnoRepository) {}

  async run(): Promise<Alumno[] | null> {
    try {
      const result = await this.alumnoRepository.getAllAlumno();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
