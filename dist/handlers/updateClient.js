"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = void 0;
const client_1 = require("../entities/client");
const updateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let client = req.body;
    let rs = yield client_1.Client.findByPk(id);
    if (rs !== null) {
        yield client_1.Client.update({ name: client.name, edad: client.edad }, { where: { id: id } });
        res.status(200).json({ message: "Cliente actualizado" });
    }
    res.status(404).json({ message: "Cliente no encontrado" });
});
exports.updateClient = updateClient;