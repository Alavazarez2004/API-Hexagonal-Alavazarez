import express from 'express';
import cors from 'cors';
import http from 'http'; // Importa el módulo http para crear un servidor HTTP independiente para Socket.io
import { Server } from 'socket.io';
import {initialDataBase} from './database/database';
import { alumnoRouter } from './alumno/infraestructura/alumnoRouter';
import { tareaRouter } from './tarea/infraestructura/tareaRouter';
import { suscripcionRouter } from './suscripcion/infraestructura/suscripcionRouter';
import { pagoRouter } from './pago/infraestructura/pago.routes';

const app = express();

// Configuración de CORS
app.use(cors());

//Middlewares
app.use(express.json());
app.disable('x-powered-by');

app.use('/alumno',alumnoRouter);
app.use('/tarea',tareaRouter);
app.use('/suscripcion',suscripcionRouter);
app.use('/pago',pagoRouter);

// Crear un servidor HTTP independiente utilizando Express
const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"*"
    }
})

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

