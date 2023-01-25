"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/', (req, res) => {
    let data = req.body;
    console.log(`Data: ${data.name} - ${data.edad}`);
    res.send(data);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
