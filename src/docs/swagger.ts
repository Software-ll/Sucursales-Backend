import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "Users API Documentation",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    components: {
        schemas: {
            user: {
                type: "object",
                required: ["name", "lastname", "age", "phone", "email", "address", "type"],
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
                    }
                }
            }
        }
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/controllers/user.rest.ts"]
};

export default swaggerJSDoc(swaggerOptions);