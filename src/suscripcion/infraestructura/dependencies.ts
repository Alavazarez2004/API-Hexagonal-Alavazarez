import { MysqlSuscripcionRepository } from "./mysqlSuscripcionRepository";
import { AddSuscripcionCasoUso } from "../aplicacion/addSuscripcion.CasoUso";
import { AddSuscripcionController } from "./controller/addSuscripcion.controller";

import { DeleteSuscripcionCasoUso } from "../aplicacion/deleteSuscripcion.CasoUso";
import { DeleteSuscripcionController } from "./controller/deleteSuscripcion.controller";

import { GetAllSuscripcionCasoUso } from "../aplicacion/getAllSuscripcion.CasoUso";
import { GetAllSuscripcionController } from "./controller/getAllSuscripcion.controller";
import { EncriptPass } from '../infraestructura/Helpers/EncriptPass';

export const mysqlSuscripcionRepository = new MysqlSuscripcionRepository();
export const encriptPass = new EncriptPass();
export const addSuscripcionCasoUso = new AddSuscripcionCasoUso(mysqlSuscripcionRepository, encriptPass);
export const addSuscripcionController = new AddSuscripcionController(addSuscripcionCasoUso);

export const deleteSuscripcionCasoUso = new DeleteSuscripcionCasoUso(mysqlSuscripcionRepository);
export const deleteSuscripcionController = new DeleteSuscripcionController(deleteSuscripcionCasoUso);

export const getAllSuscripcionCasoUso = new GetAllSuscripcionCasoUso(mysqlSuscripcionRepository);
export const getAllSuscripcionController = new GetAllSuscripcionController(getAllSuscripcionCasoUso);