import {Sequelize} from "sequelize-typescript";
import {Client} from "../entities/client";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "root",
    database: "hito1",
    logging: false,
    models: [Client],
});

const startDB = () => {
    connection.sync().then(() => {
        console.log("DB connected");
    });
}

export default startDB;