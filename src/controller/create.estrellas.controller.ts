import type { Request, Response } from "express";

export async function createEstrellaController(req: Request, res: Response) {
  return res.status(200).json({ message: "se agrego una nueva estrella bb" });
}
