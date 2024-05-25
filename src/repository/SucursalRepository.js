const Sucursal = require("../models/sucursal");

class SucursalRepository {
  async getAllSucursales() {
    return await Sucursal.find();
  }

  async getSucursalById(id) {
    return await Sucursal.findById(id);
  }

  async createSucursal(nombre, direccion, telefono, id_central, id_sector) {
    return await Sucursal.create({
      nombre,
      direccion,
      telefono,
      id_central,
      id_sector,
    });
  }

  async updateSucursal(id, nombre, direccion, telefono, id_central, id_sector) {
    return await Sucursal.findByIdAndUpdate(
      id,
      { nombre, direccion, telefono, id_central, id_sector },
      { new: true }
    );
  }

  async deleteSucursal(id) {
    return await Sucursal.findByIdAndDelete(id);
  }
}

module.exports = SucursalRepository;
