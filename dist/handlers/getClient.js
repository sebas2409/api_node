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
exports.getClient = void 0;
const client_1 = require("../entities/client");
const getClient = (rq, rs) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = rq.params;
    const client = yield client_1.Client.findByPk(id);
    rs.send(JSON.stringify(client));
    return client;
});
exports.getClient = getClient;
