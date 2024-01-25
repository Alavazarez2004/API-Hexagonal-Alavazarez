import express from 'express';
import {initialDataBase} from './database/database';
import { alumnoRouter } from './alumno/infraestructura/alumnoRouter';
import { tareaRouter } from './tarea/infraestructura/tareaRouter';

const app = express();

app.use(express.json());
app.use('/alumno',alumnoRouter);
app.use('/tarea',tareaRouter);

async function startServer() {
    try {
        await initialDataBase();
        app.listen(3000, () => {
            console.log("Servidor corriendo en el puerto 3000");  
        })
    } catch (error) {
        console.log("Error al iniciar el servidor", error);
    }
}
startServer();

