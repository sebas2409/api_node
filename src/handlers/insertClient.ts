import {Request, Response} from "express";
import {Client} from "../entities/client";
import {ClientDto} from "../dto/clientDto";

export const insertClient = async (req: Request, res: Response) => {
    const data: ClientDto = req.body;
    await Client.create({...data});
    res.send(data);
}