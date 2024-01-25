import {Model, DataType, Column, Table} from 'sequelize-typescript';

@Table({
    tableName:"tareas",
    timestamps:false,
})

class TareaModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id!:number;

    @Column({
        type:DataType.STRING(25),
        allowNull:false
    })
    public nombre!:string;
}

export default TareaModel;

