import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "Sucursales API Documentation",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    components: {
        schemas: {
            Sucursal: {
                type: "object",
                required: ["nombre", "direccion", "telefono", "id_central", "id_sector"],
                properties: {
                    nombre: {
                        type: "string"
                    },
                    direccion: {
                        type: "string"
                    },
                    telefono: {
                        type: "string"
                    },
                    id_central: {
                        type: "string"
                    },
                    id_sector: {
                        type: "string"
                    }
                }
            }
        }
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/controllers/sucursal.rest.ts"]
};

export default swaggerJSDoc(swaggerOptions);
