import express from 'express';
import { getAllSuscripcionController } from './dependencies';
import { addSuscripcionController } from './dependencies';
import { deleteSuscripcionController } from './dependencies';

export const suscripcionRouter = express.Router();

suscripcionRouter.get('/visualizarSuscripciones', (req, res) => {
  getAllSuscripcionController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo suscripcion.routes.ts');
    });
});

suscripcionRouter.post('/agregarSuscripcion', (req, res) => {
  addSuscripcionController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo suscripcion.routes.ts');
    });
});

suscripcionRouter.delete('/eliminarSuscripcion', (req, res) => {
  deleteSuscripcionController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo suscripcion.routes.ts');
    });
});