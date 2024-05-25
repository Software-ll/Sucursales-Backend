import { Request, Response, Router } from "express"
import { handleHttp } from "../utils/error.handle" 
import { getEmployees, getEmployee, insertEmployee, updateEmployee, deleteEmployee } from "./employee.service";

const router = Router();

const getAll = async (req: Request, res: Response) => {
    try {
        const responseItems = await getEmployees();
        res.send(responseItems);
    } catch (e){
        res.status(500);
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
};

const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const responseItem = await getEmployee(id);
        res.send(responseItem);
    } catch (e){
        res.status(500);
        handleHttp(res, 'ERROR_GET_ITEM');
    }
};

const save = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const responseItem = await insertEmployee(body);
        res.status(201).send(responseItem);
    } catch (e){
        res.status(500);
        handleHttp(res, 'ERROR_SAVE_ITEM', e);
    }
};

const updateById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await updateEmployee(id, body);
        res.send(response);
    } catch (e){
        res.status(500);
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
};

const deleteById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteEmployee(id);
        res.send(response);
    } catch (e){
        res.status(500);
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
};

//ENDPOINTS

/**
 * Post track
 * @openapi
 * /empleados:
 *    get:
 *      tags:
 *        - empleados
 *      summary: "Get all employees"
 *      description: This endpoint returns all employees in the collection.
 *      responses:
 *        '200':
 *          description: Returns all employees.
 *        '404':
 *          description: Not found.
 *        '500':
 *          description: Internal server error.
 */
router.get('/empleados', getAll);

/**
 * Post track
 * @openapi
 * /empleados/{_id}:
 *    get:
 *      tags:
 *        - empleados
 *      summary: "Find employee by id"
 *      description: Returns a single employee.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of employee to return.
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        '200':
 *          description: Returns a single employee by id.
 *        '404':
 *          description: Not found.
 *        '500':
 *          description: Internal server error.
 */
router.get('/empleados/:id', getById);

/**
 * Post track
 * @openapi
 * /empleados:
 *    post:
 *      tags:
 *        - empleados
 *      summary: "Add a new employee to the collection"
 *      description: Add a new employee to the db.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/employee"
 *      responses:
 *        '200':
 *          description: employee added successful.
 *        '404':
 *          description: Not found.
 *        '500':
 *          description: Internal server error.
 */
router.post('/empleados', save);

/**
 * Post track
 * @openapi
 * /empleados/{_id}:
 *    put:
 *      tags:
 *        - empleados
 *      summary: "Update employee by id"
 *      description: Update an existing employee by id.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of employee to update.
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/employee"
 *      responses:
 *        '201':
 *          description: employee updated successful.
 *        '404':
 *          description: Not found.
 *        '500':
 *          description: Internal server error.
 */
router.put('/empleados/:id', updateById);

/**
 * Post track
 * @openapi
 * /empleados/{_id}:
 *    delete:
 *      tags:
 *        - empleados
 *      summary: "Delete employee by id"
 *      description: Delete an existing employee by id.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of employee to delete.
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        '200':
 *          description: employee deleted successful.
 *        '404':
 *          description: Not found.
 *        '500':
 *          description: Internal server error.
 */
router.delete('/empleados/:id', deleteById);

export { router, getById, getAll, save, updateById, deleteById };