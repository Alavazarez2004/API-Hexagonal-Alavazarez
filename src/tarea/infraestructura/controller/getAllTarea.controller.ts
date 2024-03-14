import { Request, Response } from "express";
import { GetAllTareaCasoUso } from "../../aplicacion/getAllTarea.CasoUso";

export class GetAllTareaController {
  constructor(readonly getAllTareaCasoUso: GetAllTareaCasoUso) {}

  async run(req: Request, res: Response) {
    try {
      const Tarea = await this.getAllTareaCasoUso.run();
      console.log(Tarea);
      if (Tarea)
        res.status(200).send({
          status: "success",
          data: Tarea.map((tarea: any) => {
            return {
              id: tarea.id,
              nombre: tarea.nombre
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}