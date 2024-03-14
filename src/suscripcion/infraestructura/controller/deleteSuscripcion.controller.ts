import { Request, Response } from "express";
import { DeleteSuscripcionCasoUso } from "../../aplicacion/deleteSuscripcion.CasoUso";

export class DeleteSuscripcionController{
    
    constructor(readonly deleteSuscripcionCasoUso:DeleteSuscripcionCasoUso){}
    async run(req: Request, res: Response) {
        try {
            let nombre_producto = req.body.nombre_producto;
            console.log(req.body);
    
            let suscripcionEliminada = await this.deleteSuscripcionCasoUso.run(nombre_producto);
    
            if (suscripcionEliminada) {
                res.status(200).send({
                    message: "Suscripción cancelada exitosamente"
                });
            } else {
                return res.status(400).send({
                    status: "success",
                    data: [],
                    message: "Error al cancelar la suscripción en deleteSuscripcion.controller"
                });
            }
        } catch (error) {
            console.log("Error en deleteSuscripcion.controller", error);
            return res.status(500).send({
                status: "error",
                message: "Error en el servidor"
            });
        }
    }
    
}