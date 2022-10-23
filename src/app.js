import express from "express";
import morgan from "morgan";
//Rutas
import personaRoutes from './routes/persona.routes'

const app = express(); //crear aplicacion con express

//Settings
app.set("port", 4444); // asignacion de puerto

//Middlewares
app.use(morgan("dev")); // utilizar morgan en modo desarrollo
app.use(express.json()); // para que el servidor entienda json

//Routes
app.use("/api/persona", personaRoutes)

export default app;
