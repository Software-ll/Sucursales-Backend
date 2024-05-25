import { Schema, model } from "mongoose";
import { ISucursal } from "./sucursal.interface";

const SucursalSchema = new Schema<ISucursal>(
  {
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    id_central: { type: String, required: true },
    id_sector: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SucursalModel = model("Sucursal", SucursalSchema);
export default SucursalModel;
