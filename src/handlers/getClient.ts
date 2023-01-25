import {Request, Response} from "express";
import {Client} from "../entities/client";
import {ClientDto} from "../dto/clientDto";

export const getClient = async (rq: Request, rs: Response) => {
    const {id} = rq.params;
    const client: ClientDto | null = await Client.findByPk(id);
    if (client !== null) {
        rs.status(200).json(client);
    }

    rs.status(404).json({message: "Cliente no encontrado"});

}
