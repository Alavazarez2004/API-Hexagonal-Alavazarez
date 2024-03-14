import { Pago } from '../dominio/pago';
import { PagoRepositorio } from '../dominio/pagoRepositorio';
import { EncripServiceHelpers } from '../infraestructura/helpers/EncryHelper';
import { NotificacionHelpers } from '../infraestructura/helpers/NotificacionHelper';

export class AddPagoCasoUso {
    constructor(
        readonly pagoRepositorio: PagoRepositorio,
        readonly encryPassHelper: EncripServiceHelpers,
        readonly notificacionHelpers: NotificacionHelpers,
    ){}

    async run(id_Pago:number,nombre:string,producto:string,tarjeta:string,precio:number):Promise<Pago | null>{
        try {
            const EncryTarjeta = await this.encryPassHelper.encodeTarjeta(tarjeta);
            const PagoCreado = await this.pagoRepositorio.addPago(id_Pago,nombre,producto,EncryTarjeta,precio);
            if(PagoCreado)
            this.notificacionHelpers.sendNotificacion(PagoCreado);
            return PagoCreado;
        } catch (error) {
            console.log("Error en addPago.Caso.Uso", error);
            return null
        }
    }
}