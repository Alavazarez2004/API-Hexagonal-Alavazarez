import express from 'express'
import { addPagoController } from './dependencies';
import { error } from 'console';

export const pagoRouter = express.Router();

pagoRouter.post('/', (req, res) => {
    addPagoController.run(req, res)
    .then(() => {
        return null;
    })
    .catch((err: Error) =>{
        console.log(error);
        res.status(500).send('Error en el archivo pago.routes.ts');
    });
});