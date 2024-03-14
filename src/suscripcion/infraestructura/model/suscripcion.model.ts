import {Model, DataType, Column, Table} from 'sequelize-typescript';

@Table({
    tableName:"suscripciones",
    timestamps:false,
})

class SuscripcionModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement: true
    })
    public id!:number;

    @Column({
        type:DataType.STRING(),
        allowNull:false,
    })
    public nombre_producto!:string;

    @Column({
        type:DataType.STRING(),
        allowNull:false,
    })
    public password!:string;
}

export default SuscripcionModel;

