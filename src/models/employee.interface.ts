export interface IEmployee {
    _id?: string;
    name: string;
    lastname: string;
    age: number;
    phone: number;
    email: string;
    address: string;
    type: "administrador" | "farmaceutico";
    idSucursal: number;
    createdAt?: Date;
    updatedAt?: Date;
}