import {Request, Response} from "express";
import {Client} from "../entities/client";

export const getAll = async (req: Request, res: Response) => {
    let clients = await Client.findAll();
    res.json(clients);

}
