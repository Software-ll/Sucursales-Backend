import { Schema, model } from "mongoose";
import { IEmployee } from "./employee.interface";

const UserSchema = new Schema<IEmployee>(
    {
        name: {type: String, required: true},
        lastname: {type: String, required: true},
        age: {type: Number, required: true},
        phone: {type: Number, required: true},
        email: {type: String, required: true},
        address: {type: String, required: true},
        type: {type: String, enum: ['administrador', 'farmaceutico'], required: true},
        idSucursal: {type: Number, required: true}
    }, 
    {
    timestamps: true,
    versionKey: false
    }
);

const EmployeeModel = model('empleados', UserSchema);
export default EmployeeModel;