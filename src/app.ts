import express from "express";
import { router as routerStars } from "./routers/estrellas.router";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/estrellas", routerStars);

app.listen(PORT, () => {
  console.log("servidor conectado!!!!F");
});
