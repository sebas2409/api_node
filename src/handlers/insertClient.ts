import {Request, Response} from "express";
import {Client} from "../entities/client";
import {ClientDto} from "../dto/clientDto";

export const insertClient = async (req: Request, res: Response) => {
    const data: ClientDto = req.body;
    await Client.create({...data});
    let user: Client | null = await Client.findOne({where: {name: data.name}});

    if (user !== null) {
        res.status(200).json(user);
    }

}