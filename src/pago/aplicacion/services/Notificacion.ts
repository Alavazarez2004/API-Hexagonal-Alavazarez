import amqplib from 'amqplib';
import { Pago } from '../../dominio/pago';

export interface INotificacionService{
    provideChannel : amqplib.Channel | undefined;

    inicializar (): Promise<boolean>;
    sendNotificacion(pagoCreado: Pago): boolean;
}