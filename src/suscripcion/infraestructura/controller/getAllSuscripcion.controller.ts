import { Request, Response } from "express";
import { GetAllSuscripcionCasoUso } from "../../aplicacion/getAllSuscripcion.CasoUso";

export class GetAllSuscripcionController {
  constructor(readonly getAllSuscripcionCasoUso: GetAllSuscripcionCasoUso) {}

  async run(req: Request, res: Response) {
    try {
      const Suscripcion = await this.getAllSuscripcionCasoUso.run();
      console.log(Suscripcion);
      if (Suscripcion)
        res.status(200).send({
          status: "success",
          data: Suscripcion.map((Suscripcion: any) => {
            return {
              nombre_producto: Suscripcion.nombre_producto,
              password: Suscripcion.password,
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