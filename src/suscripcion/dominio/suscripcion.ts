export class Suscripcion{
    static execute(arg0: string, arg1: string[]): [any, any] | PromiseLike<[any, any]> {
        throw new Error("Metodo no implementado");
    }
    constructor(
        readonly id:number,
        readonly nombre_producto:string,
        readonly password:string,
    ){}
}
