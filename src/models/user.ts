import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const UserSchema = new Schema<IUser>(
    {
        name: {type: String, required: true},
        lastname: {type: String, required: true},
        age: {type: Number, required: true},
        phone: {type: Number, required: true},
        email: {type: String, required: true},
        address: {type: String, required: true}
    }, 
    {
    timestamps: true,
    versionKey: false
    }
);

const UserModel = model('users', UserSchema);
export default UserModel;