import { Request, Response } from "express";
import { GetAllAlumnoCasoUso } from "../../aplicacion/getAllAlumno.CasoUso";

export class GetAllAlumnoController {
  constructor(readonly getAllAlumnoCasoUso: GetAllAlumnoCasoUso) {}

  async run(req: Request, res: Response) {
    try {
      const Alumno = await this.getAllAlumnoCasoUso.run();
      console.log(Alumno);
      if (Alumno)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: Alumno.map((Alumno: any) => {
            return {
              id: Alumno.id,
              nombre: Alumno.nombre,
              apellidoPaterno: Alumno.apellidoPaterno,
              apellidoMaterno: Alumno.apellidoMaterno
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}