import { Request, Response, Router } from "express"
import { handleHttp } from "../utils/error.handle" 
import { getUsers, getUser, insertUser, updateUser, deleteUser } from "./user.service";

const router = Router();

const getAll = async (req: Request, res: Response) => {
    try {
        const responseItems = await getUsers();
        res.send(responseItems);
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
};

const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const responseItem = await getUser(id);
        res.send(responseItem);
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEM');
    }
};

const save = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const responseItem = await insertUser(body);
        res.send(responseItem);
    } catch (e){
        handleHttp(res, 'ERROR_SAVE_ITEM', e);
    }
};

const updateById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await updateUser(id, body);
        res.send(response);
    } catch (e){
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
};

const deleteById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteUser(id);
        res.send(response);
    } catch (e){
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
};

//ENDPOINTS

/**
 * Post track
 * @openapi
 * /users:
 *    get:
 *      tags:
 *        - users
 *      summary: "Get all users"
 *      description: This endpoint returns all users in the collection.
 *      responses:
 *        '200':
 *          description: Returns all users.
 *        '404':
 *          description: Not found.
 *        '500':
 *          description: Internal server error.
 */
router.get('/users', getAll);

/**
 * Post track
 * @openapi
 * /users/{_id}:
 *    get:
 *      tags:
 *        - users
 *      summary: "Find user by id"
 *      description: Returns a single user.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of user to return.
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        '200':
 *          description: Retorna a single user by id.
 *        '404':
 *          description: Not found.
 *        '500':
 *          description: Internal server error.
 */
router.get('/users/:id', getById);

/**
 * Post track
 * @openapi
 * /users:
 *    post:
 *      tags:
 *        - users
 *      summary: "Add a new user to the collection"
 *      description: Add a new user to the db.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      responses:
 *        '200':
 *          description: User added successful.
 *        '404':
 *          description: Not found.
 *        '500':
 *          description: Internal server error.
 */
router.post('/users', save);

/**
 * Post track
 * @openapi
 * /users/{_id}:
 *    put:
 *      tags:
 *        - users
 *      summary: "Update user by id"
 *      description: Update an existing user by id.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of user to update.
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      responses:
 *        '200':
 *          description: User updated successful.
 *        '404':
 *          description: Not found.
 *        '500':
 *          description: Internal server error.
 */
router.put('/users/:id', updateById);

/**
 * Post track
 * @openapi
 * /users/{_id}:
 *    delete:
 *      tags:
 *        - users
 *      summary: "Delete user by id"
 *      description: Delete an existing user by id.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of user to delete.
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        '200':
 *          description: User deleted successful.
 *        '404':
 *          description: Not found.
 *        '500':
 *          description: Internal server error.
 */
router.delete('/users/:id', deleteById);

export { router, getById, getAll, save, updateById, deleteById };