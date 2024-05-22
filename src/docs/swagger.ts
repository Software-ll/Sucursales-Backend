import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "Documentación de la API Empleados",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    components: {
        schemas: {
            employee: {
                type: "object",
                required: ["name", "lastname", "age", "phone", "email", "address", "type", "idSucursal"],
                properties: {
                    name: {
                        type: "string"
                    },
                    lastname: {
                        type: "string"
                    },
                    age: {
                        type: "number"
                    },
                    phone: {
                        type: "number"
                    },
                    email: {
                        type: "string"
                    },
                    address: {
                        type: "string"
                    },
                    type: {
                        type: "string"
                    },
                    idSucursal: {
                        type: "number"
                    }
                }
            }
        }
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/controllers/employee.rest.ts"]
};

export default swaggerJSDoc(swaggerOptions);