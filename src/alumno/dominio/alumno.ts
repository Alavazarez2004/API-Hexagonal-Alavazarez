export class Alumno{
    static execute(arg0: string, arg1: string[]): [any, any] | PromiseLike<[any, any]> {
        throw new Error("Metodo no implementado");
    }
    constructor(
        readonly id:number,
        readonly nombre:string,
        readonly password:string
    ){}
}
