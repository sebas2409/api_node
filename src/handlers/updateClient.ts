import {Request, Response} from "express";
import {ClientDto} from "../dto/clientDto";
import {Client} from "../entities/client";

export const updateClient = async (req: Request, res: Response) => {
    let {id} = req.params;
    let client: ClientDto = req.body;
    let rs = await Client.findByPk(id);
    if (rs !== null) {
        await Client.update({name: client.name, edad: client.edad}, {where: {id: id}});
        res.status(200).json({message: "Cliente actualizado"});
    }

    res.status(404).json({message: "Cliente no encontrado"});

}