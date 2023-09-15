import { Request, Response } from "express";
import estrellaData from "../data/Estrellas.json";

export async function getEstrellaById (req:Request , res: Response){
    const id = req.params.id;
    const estrella = estrellaData.find((estrella) => estrella.id === parseInt(id));
    if(estrella){
       return res.status(200).json(estrella);
    }else{
       return res.status(404).json({message: 'Perdon pero esa estella no esta :('});
    }
}