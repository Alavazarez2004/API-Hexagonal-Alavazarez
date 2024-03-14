import { SqlPagoRepositorio } from "./sqlPago.repositorio";

import { EncripServiceHelpers } from "./helpers/EncryHelper";
import { NotificacionHelpers } from "./helpers/NotificacionHelper";

import { AddPagoCasoUso } from "../aplicacion/addPagoCasoUso";
import { AddPagoController } from "./controller/addPagoController";

export const encriptServi = new EncripServiceHelpers;
export const notificacionHelpers = new NotificacionHelpers;

notificacionHelpers.inicializar();

export const sqlPagoRepositorio = new SqlPagoRepositorio();
export const addPagoCasoUso = new AddPagoCasoUso(sqlPagoRepositorio,encriptServi,notificacionHelpers);
export const addPagoController = new AddPagoController(addPagoCasoUso);