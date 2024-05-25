const Sucursal = require("../models/sucursal");

class SucursalService {
  async getAllSucursales() {
    return Sucursal.find();
  }

  async getSucursalById(id) {
    return Sucursal.findById(id);
  }

  async createSucursal(nombre, direccion, telefono, id_central, id_sector) {
    const newSucursal = new Sucursal({
      nombre,
      direccion,
      telefono,
      id_central,
      id_sector,
    });
    return newSucursal.save();
  }

  async updateSucursal(id, nombre, direccion, telefono, id_central, id_sector) {
    return Sucursal.findByIdAndUpdate(
      id,
      {
        nombre,
        direccion,
        telefono,
        id_central,
        id_sector,
      },
      { new: true }
    );
  }

  async deleteSucursal(id) {
    return Sucursal.findByIdAndDelete(id);
  }
}

module.exports = SucursalService;
