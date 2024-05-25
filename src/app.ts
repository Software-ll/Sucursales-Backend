import "dotenv/config";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import { router } from "./controllers/sucursal.rest"; // Cambio aquí
import db from "./config/mongo";

// Configuración del puerto
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(router);
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

// Conexión a MongoDB
db()
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error(err));

// Escuchar el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
