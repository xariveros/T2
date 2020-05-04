import express, { json } from "express";
import morgan from "morgan";

import burgersRoutes from "./routes/burgers";
import ingredientesRoutes from "./routes/ingredientes";

//import { Burger } from "./models/burgers";
//import { Ingrediente } from "./models/ingredientes";

//const hamburguesa = Burger.create({ name: "hola" });
//const ingrediente1 = Ingrediente.create({ name: "Queen" });

//inicializacion
const app = express();

//middlewares

app.use(morgan("dev"));
app.use(json());

//rutas
app.use("/hamburguesa", burgersRoutes);
app.use("/ingrediente", ingredientesRoutes);

export default app;
