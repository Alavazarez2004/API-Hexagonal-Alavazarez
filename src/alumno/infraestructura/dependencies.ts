import { MysqlAlumnoRepository } from "./mysqlAlumnoRepository";
import { AddAlumnoCasoUso } from "../aplicacion/addAlumno.CasoUso";
import { AddAlumnoController } from "./controller/addAlumno.controller";

import { DeleteAlumnoCasoUso } from "../aplicacion/deleteAlumno.CasoUso";
import { DeleteAlumnoController } from "./controller/deleteAlumno.controller";

export const mysqlAlumnoRepository = new MysqlAlumnoRepository();
export const addAlumnoCasoUso = new AddAlumnoCasoUso(mysqlAlumnoRepository);
export const addAlumnoController = new AddAlumnoController(addAlumnoCasoUso);

export const deleteAlumnoCasoUso = new DeleteAlumnoCasoUso(mysqlAlumnoRepository);
export const deleteAlumnoController = new DeleteAlumnoController(deleteAlumnoCasoUso);