import express from 'express';
import { getAllTareaController } from './dependencies';
import { getByIdTareaController } from "./dependencies";
import { addTareaController } from './dependencies';
import { deleteTareaController } from './dependencies';

export const tareaRouter = express.Router();

tareaRouter.get('/visualizarTareas', getAllTareaController.run.bind(getAllTareaController));
tareaRouter.get("/:id",getByIdTareaController.run.bind(getByIdTareaController));
tareaRouter.post('/agregarTarea', addTareaController.run.bind(addTareaController));
tareaRouter.delete('/eliminarTarea', deleteTareaController.run.bind(deleteTareaController));