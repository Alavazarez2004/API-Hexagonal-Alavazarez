import { Tarea } from "../dominio/tarea";
import { TareaRepository } from "../dominio/tareaRepository";
import TareaModel from "./model/tarea.model";

export class MysqlTareaRepository implements TareaRepository{

    async getAllTarea(): Promise<Tarea[] | null> {
        try {
            const tareas = await TareaModel.findAll();

            if (!tareas || tareas.length === 0) {
                return null;
            }

            return tareas.map(tarea => new Tarea(tarea.id, tarea.nombre));
        } catch (error) {
            console.log("Error en mysqlTarea.repository en GetAllTarea", error);
            return null;
        }
    }

    async getByIdTarea(id: number): Promise<Tarea | null> {
        try {
            const tareaEncontrada = await TareaModel.findByPk(id);

            if (!tareaEncontrada) {
                return null; // Retorna null si no se encuentra la tarea
            }

            return new Tarea(tareaEncontrada.id, tareaEncontrada.nombre);
        } catch (error) {
            console.log("Error en mysqlTarea.repository en GetByIdTarea", error);
            return null;
        }
    }

    async addTarea(id: number, nombre: string): Promise<Tarea | null> {
        try {
            const tareaRegistrada = await TareaModel.create({id,nombre});
            return new Tarea(tareaRegistrada.id, tareaRegistrada.nombre)
        } catch (error) {
            console.log("Error en mysqlTarea.repository", error);
            return null;
        }
    }

    async deleteTarea(id: number): Promise<Tarea | null> {
        try {
            const tareaEliminada = await TareaModel.findOne({where: {id:id}});
            if(tareaEliminada){
                await tareaEliminada.destroy();
                return new Tarea(tareaEliminada.id,tareaEliminada.nombre);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en mysqlTarea.repository en DeleteTarea", error);
            return null;
        }
    }
}