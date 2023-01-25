import {Request, Response} from "express";
import {Client} from "../entities/client";

export const deleteClient = async (req: Request, res: Response) => {
    const {id} = req.params;
    await Client.destroy({where: {id}});
    res.status(200).json({message: "Client deleted successfully"});
}