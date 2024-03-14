import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Pagos",
    timestamps:false
})
class PagoModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id_Pago!:number

    @Column({
        type:DataType.STRING(50),
        allowNull:false
    })
    public nombre!:string

    @Column({
        type:DataType.STRING(50),
        allowNull:false
    })
    public producto!:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    public tarjeta!:string

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    public precio!:number
}
export default PagoModel;