import { ISucursal } from "../models/sucursal.interface";
import SucursalModel from "../models/sucursal";

const getAllSucursales = async () => {
    const sucursales = await SucursalModel.find({});
    return sucursales;
};

const getSucursalById = async (id: string) => {
    const sucursal = await SucursalModel.findOne({_id: id});
    return sucursal;
};

const createSucursal = async (sucursalData: ISucursal) => {
    const nuevaSucursal = await SucursalModel.create(sucursalData);
    return nuevaSucursal;
};

const updateSucursal = async (id: string, newData: ISucursal) => {
    const sucursalActualizada = await SucursalModel.findOneAndUpdate({_id : id}, newData, {new: true});
    return sucursalActualizada;
};

const deleteSucursal = async (id: string) => {
    const response = await SucursalModel.deleteOne({_id: id});
    return response;
};

export { getAllSucursales, getSucursalById, createSucursal, updateSucursal, deleteSucursal };
