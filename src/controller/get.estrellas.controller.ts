import { Request, Response } from "express";
import estrellaData from "../data/Estrellas.json";


export async function getEstrellasController (req:Request, res: Response) {
    const type = req.query.type as string;
    let estrellas = estrellaData;
    if(type){
        estrellas = estrellaData.filter((estrella) => estrella.type.includes(type));
    }
    return res.status(200).json(estrellas);
}

