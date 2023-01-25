import express, {Express} from "express";
import {urlencoded} from "body-parser";
import startDB from "./db/db";
import {insertClient} from "./handlers/insertClient";
import {getClient} from "./handlers/getClient";
import {deleteClient} from "./handlers/deleteClient";
import {updateClient} from "./handlers/updateClient";
import {getAll} from "./handlers/getAll";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(urlencoded({extended: true}));

startDB();

app.post('/insert', insertClient);
app.get('/get/:id', getClient);
app.delete('/delete/:id', deleteClient);
app.post('/update/:id', updateClient);
app.get('/', getAll);


app.listen(port, () => {
    console.log(`Api corriendo en http://localhost:${port}`);
});