import { MysqlTareaRepository } from "./mysqlTareaRepository";
import { AddTareaCasoUso } from "../aplicacion/addTarea.CasoUso";
import { AddTareaController } from "./controller/addTarea.controller";

import { DeleteTareaCasoUso } from "../aplicacion/deleteTarea.CasoUso";
import { DeleteTareaController } from "./controller/deleteTarea.controller";

import { GetAllTareaCasoUso } from "../aplicacion/getAllTarea.CasoUso";
import { GetAllTareaController } from "./controller/getAllTarea.controller";

import { GetByIdTareaCasoUso } from "../aplicacion/getByIdTarea.CasoUso";
import { GetByIdTareaController } from "./controller/getByIdTarea.controller";

export const mysqlTareaRepository = new MysqlTareaRepository();
export const addTareaCasoUso = new AddTareaCasoUso(mysqlTareaRepository);
export const addTareaController = new AddTareaController(addTareaCasoUso);

export const deleteTareaCasoUso = new DeleteTareaCasoUso(mysqlTareaRepository);
export const deleteTareaController = new DeleteTareaController(deleteTareaCasoUso);

export const getAllTareaCasoUso = new GetAllTareaCasoUso(mysqlTareaRepository);
export const getAllTareaController = new GetAllTareaController(getAllTareaCasoUso);

export const getByIdTareaCasoUso = new GetByIdTareaCasoUso(mysqlTareaRepository);
export const getByIdTareaController = new GetByIdTareaController(getByIdTareaCasoUso);