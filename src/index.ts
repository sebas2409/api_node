import express, {Express, Request, Response} from "express";
import connection from "./db/db";
import {Client} from "./entities/client";
import {urlencoded} from "body-parser";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(urlencoded({extended: true}));

interface data {
    name: string;
    edad: number;
}

connection.sync().then(() => {
    console.log("DB connected");
});

app.post('/', (req: Request, res: Response) => {
    const data: data = req.body;
    Client.create({...data}).then(r => console.log("Data saved :: ", r));
    res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});