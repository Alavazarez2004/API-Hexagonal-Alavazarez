import express from 'express';
import { getAllTareaController } from './dependencies';
import { getByIdTareaController } from "./dependencies";
import { addTareaController } from './dependencies';
import { deleteTareaController } from './dependencies';

export const tareaRouter = express.Router();

tareaRouter.get('/visualizarTareas', (req, res) => {
    getAllTareaController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo tarea.routes.ts');
    });
});

tareaRouter.get('/:id', (req, res) => {
    getByIdTareaController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo tarea.routes.ts');
    });
});

tareaRouter.post('/agregarTarea', (req, res) => {
    addTareaController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo tarea.routes.ts');
    });
});

tareaRouter.delete('/eliminarTarea', (req, res) => {
    deleteTareaController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo tarea.routes.ts');
    });
});