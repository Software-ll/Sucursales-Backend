import "dotenv/config";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import { router } from "./controllers/employee.rest";
import db from "./config/mongo";

//Config
const PORT = process.env.PORT || 3001;
const app = express();

//Middelware
app.use(cors());
app.use(express.json());
app.use(router);
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

//MongoDB Connection
db().then(() => console.log("Connected to mongodb")).catch(err => console.error(err));

//Server listening
app.listen(PORT, () => console.log(`Running by the port ${PORT}`));