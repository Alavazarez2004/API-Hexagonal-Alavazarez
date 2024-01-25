import {Model, DataType, Column, Table} from 'sequelize-typescript';

@Table({
    tableName:"alumnos",
    timestamps:true,
})

class AlumnoModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
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
    public apellidoPaterno!:string;

    @Column({
        type:DataType.STRING(),
        allowNull:false
    })
    public apellidoMaterno!:string;
}

export default AlumnoModel;

