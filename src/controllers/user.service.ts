import { IUser } from "../models/user.interface";
import UserModel from "../models/user";

const getUsers = async () => {
    const responseItem = await UserModel.find({});
    return responseItem;
};

const getUser = async (id: string) => {
    const responseItem = await UserModel.findOne({_id: id});
    return responseItem;
};

const insertUser = async (item : IUser) => {
    const responseInsert = await UserModel.create(item);
    return responseInsert;
};

const updateUser = async (id: string, data: IUser) => {
    const responseItem = await UserModel.findOneAndUpdate({_id : id}, data, {new: true});
    return responseItem;
};

const deleteUser = async (id: string) => {
    const response = await UserModel.deleteOne({_id: id});
    return response;
};

export { getUsers, getUser, insertUser, updateUser, deleteUser };