import express from 'express';
import { getAllAlumnoController } from './dependencies';
import { addAlumnoController } from './dependencies';
import { deleteAlumnoController } from './dependencies';

export const alumnoRouter = express.Router();

alumnoRouter.get('/visualizarAlumnos', getAllAlumnoController.run.bind(getAllAlumnoController));
alumnoRouter.post('/agregarAlumno', addAlumnoController.run.bind(addAlumnoController));
alumnoRouter.delete('/eliminarAlumno', deleteAlumnoController.run.bind(deleteAlumnoController));