import express from 'express';
import { addAlumnoController } from './dependencies';
import { deleteAlumnoController } from './dependencies';

export const alumnoRouter = express.Router();

alumnoRouter.post('/agregarAlumno', addAlumnoController.run.bind(addAlumnoController));
alumnoRouter.delete('/eliminarAlumno', deleteAlumnoController.run.bind(deleteAlumnoController));