"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const db_1 = __importDefault(require("./db/db"));
const insertClient_1 = require("./handlers/insertClient");
const getClient_1 = require("./handlers/getClient");
const deleteClient_1 = require("./handlers/deleteClient");
const updateClient_1 = require("./handlers/updateClient");
const getAll_1 = require("./handlers/getAll");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
(0, db_1.default)();
app.post('/insert', insertClient_1.insertClient);
app.get('/get/:id', getClient_1.getClient);
app.delete('/delete/:id', deleteClient_1.deleteClient);
app.post('/update/:id', updateClient_1.updateClient);
app.get('/', getAll_1.getAll);
app.listen(port, () => {
    console.log(`Api corriendo en http://localhost:${port}`);
});
