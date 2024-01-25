import { MysqlTareaRepository } from "./mysqlTareaRepository";
import { AddTareaCasoUso } from "../aplicacion/addTarea.CasoUso";
import { AddTareaController } from "./controller/addTarea.controller";

import { DeleteTareaCasoUso } from "../aplicacion/deleteTarea.CasoUso";
import { DeleteTareaController } from "./controller/deleteTarea.controller";

export const mysqlTareaRepository = new MysqlTareaRepository();
export const addTareaCasoUso = new AddTareaCasoUso(mysqlTareaRepository);
export const addTareaController = new AddTareaController(addTareaCasoUso);

export const deleteTareaCasoUso = new DeleteTareaCasoUso(mysqlTareaRepository);
export const deleteTareaController = new DeleteTareaController(deleteTareaCasoUso);