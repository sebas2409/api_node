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
exports.insertClient = void 0;
const client_1 = require("../entities/client");
const insertClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    yield client_1.Client.create(Object.assign({}, data));
    let user = yield client_1.Client.findOne({ where: { name: data.name } });
    if (user !== null) {
        res.status(200).json(user);
    }
});
exports.insertClient = insertClient;
