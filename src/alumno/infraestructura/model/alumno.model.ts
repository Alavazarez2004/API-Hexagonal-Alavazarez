import {Model, DataType, Column, Table} from 'sequelize-typescript';

@Table({
    tableName:"alumnos",
    timestamps:false,
})

class AlumnoModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
    })
    public id!:number;

    @Column({
        type:DataType.STRING(),
        allowNull:false
    })
    public nombre!:string;

    @Column({
        type:DataType.STRING(),
        allowNull:false
    })
    public password!:string;
}

export default AlumnoModel;

