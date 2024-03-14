import { Request, Response } from "express";
import { GetByIdTareaCasoUso } from "../../aplicacion/getByIdTarea.CasoUso";

export class GetByIdTareaController {
  constructor(readonly getByIdTareaCasoUso: GetByIdTareaCasoUso) {}

  async run(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const tarea = await this.getByIdTareaCasoUso.run(id);

      if (tarea)
        res.status(200).send({
          status: "success",
          data: {
            id: tarea.id,
            nombre: tarea.nombre
          },
        });
      else
        res.status(404).send({
          status: "error",
          msn: "Tarea no encontrada",
        });
    } catch (error) {
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
