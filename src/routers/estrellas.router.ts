import { Router } from "express";
import { getEstrellasController } from "../controller/get.estrellas.controller";
import { getEstrellaById } from "../controller/get.estrellas.id.controller";
import { createEstrellaController } from "../controller/create.estrellas.controller";
import { validarEstellaMiddleware } from "../middlewares/validacion.middle";

export const router = Router();

router.get('/', getEstrellasController)

router.get('/:id',getEstrellaById )


router.post('/',validarEstellaMiddleware ,createEstrellaController )
