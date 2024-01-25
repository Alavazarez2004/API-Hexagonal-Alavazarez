import { Request, Response } from "express";
import { GetByIdTareaCasoUso } from "../../aplicacion/getByIdTarea.CasoUso";

export class GetByIdTareaController {
  constructor(readonly getByIdTareaCasoUso: GetByIdTareaCasoUso) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const tarea = await this.getByIdTareaCasoUso.run(id);

      if (tarea)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: tarea.id,
            nombre: tarea.nombre
          },
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