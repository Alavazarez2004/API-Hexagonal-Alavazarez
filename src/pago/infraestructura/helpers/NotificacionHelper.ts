import { INotificacionService } from "../../aplicacion/services/Notificacion";
import amqplib from 'amqplib';
import { Pago } from "../../dominio/pago";

export class NotificacionHelpers implements INotificacionService {
    provideChannel: amqplib.Channel | undefined;

    async inicializar () {
        try {
            const connection = await amqplib.connect("amqp://guest:guest@3.226.114.66");
            this.provideChannel = await connection.createChannel();
            console.log("Conexion exitosa");
            return true
        } catch (error) {
            console.log("Error en el archivo NotificacionHelper", error);
            return false                        
        }
    }

    sendNotificacion(pagoCreado: Pago): boolean {
        if (this.provideChannel === undefined){
            return false
        }
        const exchange = "MiguelCola";+
        console.log(JSON.stringify(pagoCreado));

        this.provideChannel.assertExchange(exchange,'direct', {durable:true});
        this.provideChannel.publish(exchange, 'alavazarez' , Buffer.from(JSON.stringify(pagoCreado.id_Pago)));
        console.log("Mensaje enviado al exchange");
        return true;
    }
}