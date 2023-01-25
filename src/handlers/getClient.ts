import {Request, Response} from "express";
import {Client} from "../entities/client";
import {ClientDto} from "../dto/clientDto";

export const getClient = async (rq: Request, rs: Response): Promise<ClientDto> => {
    const {id} = rq.params;
    const client: ClientDto | null = await Client.findByPk(id);
    rs.send(JSON.stringify(client));
    return client!;
}
