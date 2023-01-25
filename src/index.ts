import express, {Express} from "express";
import {urlencoded} from "body-parser";
import startDB from "./db/db";
import {insertClient} from "./handlers/insertClient";
import {getClient} from "./handlers/getClient";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(urlencoded({extended: true}));

startDB();

app.post('/insert', insertClient);
app.get('/:id', getClient);


app.listen(port, () => {
    console.log(`Api corriendo en http://localhost:${port}`);
});