import express from 'express';
import { getAllAlumnoController } from './dependencies';
import { addAlumnoController } from './dependencies';
import { deleteAlumnoController } from './dependencies';

export const alumnoRouter = express.Router();

alumnoRouter.get('/visualizarAlumnos', (req, res) => {
    getAllAlumnoController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo alumno.routes.ts');
    });
});

alumnoRouter.post('/agregarAlumno', (req, res) => {
    addAlumnoController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo alumno.routes.ts');
    });
});

alumnoRouter.delete('/eliminarAlumno', (req, res) => {
    deleteAlumnoController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo alumno.routes.ts');
    });
});