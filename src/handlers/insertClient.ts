import {Request, Response} from "express";
import {Client} from "../entities/client";
import {data} from "../dto/data";

export const insertClient = (req: Request, res: Response) => {
    const data: data = req.body;
    Client.create({...data}).then(r => console.log("Data saved :: ", r));
    res.send(data);
}