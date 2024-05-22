import { IEmployee } from "../models/employee.interface";
import EmployeeModel from "../models/employee";

const getEmployees = async () => {
    const responseItem = await EmployeeModel.find({});
    return responseItem;
};

const getEmployee = async (id: string) => {
    const responseItem = await EmployeeModel.findOne({_id: id});
    return responseItem;
};

const insertEmployee = async (item : IEmployee) => {
    const responseInsert = await EmployeeModel.create(item);
    return responseInsert;
};

const updateEmployee = async (id: string, data: IEmployee) => {
    const responseItem = await EmployeeModel.findOneAndUpdate({_id : id}, data, {new: true});
    return responseItem;
};

const deleteEmployee = async (id: string) => {
    const response = await EmployeeModel.deleteOne({_id: id});
    return response;
};

export { getEmployees, getEmployee, insertEmployee, updateEmployee, deleteEmployee };