export class Pago{
    constructor(
        readonly id_Pago : number,
        readonly nombre : string,
        readonly producto : string,
        readonly tarjeta : string,
        readonly precio : number
    ){}
}