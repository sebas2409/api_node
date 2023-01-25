import {Request, Response} from "express";
import {Client} from "../entities/client";
import {data} from "../dto/data";

export const getClient = async (rq: Request, rs: Response) => {
    const {id} = rq.params;
    const client: data | null = await Client.findByPk(id);
    rs.send(JSON.stringify(client));
}