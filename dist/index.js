"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db/db"));
const client_1 = require("./entities/client");
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
db_1.default.sync().then(() => {
    console.log("DB connected");
});
app.post('/', (req, res) => {
    const data = req.body;
    client_1.Client.create(Object.assign({}, data)).then(r => console.log("Data saved :: ", r));
    res.send(data);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
