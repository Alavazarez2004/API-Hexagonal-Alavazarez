import express from 'express';
import { addTareaController } from './dependencies';
import { deleteTareaController } from './dependencies';

export const tareaRouter = express.Router();

tareaRouter.post('/agregarTarea', addTareaController.run.bind(addTareaController));
tareaRouter.delete('/eliminarTarea', deleteTareaController.run.bind(deleteTareaController));