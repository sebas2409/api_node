import {Column, DataType, Model, Table} from "sequelize-typescript";


@Table({
    timestamps: false,
    tableName: "clients"
})

export class Client extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.INTEGER
    })
    edad!: number;
}