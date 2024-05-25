import { Request, Response, Router } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  getAllSucursales,
  getSucursalById,
  createSucursal,
  updateSucursal,
  deleteSucursal,
} from "./sucursal.service";

const router = Router();

const getAll = async (req: Request, res: Response) => {
  try {
    const sucursales = await getAllSucursales();
    res.send(sucursales);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const sucursal = await getSucursalById(id);
    res.send(sucursal);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const save = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const nuevaSucursal = await createSucursal(body);
    res.send(nuevaSucursal);
  } catch (e) {
    handleHttp(res, "ERROR_SAVE_ITEM", e);
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const sucursalActualizada = await updateSucursal(id, body);
    res.send(sucursalActualizada);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteSucursal(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

// ENDPOINTS

/**
 * @openapi
 * /api/sucursales:
 *   get:
 *     summary: Obtener todas las sucursales
 *     responses:
 *       200:
 *         description: Sucursales obtenidas correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sucursal'
 */
router.get("/sucursales", getAll);

/**
 * @openapi
 * /api/sucursales/{id}:
 *   get:
 *     summary: Obtener una sucursal por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la sucursal
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucursal obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sucursal'
 *       404:
 *         description: Sucursal no encontrada
 */
router.get("/sucursales/:id", getById);

/**
 * @openapi
 * /api/sucursales:
 *   post:
 *     summary: Crear una nueva sucursal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevaSucursal'
 *     responses:
 *       201:
 *         description: Sucursal creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sucursal'
 */
router.post("/sucursales", save);

/**
 * @openapi
 * /api/sucursales/{id}:
 *   put:
 *     summary: Actualizar una sucursal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la sucursal
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevaSucursal'
 *     responses:
 *       200:
 *         description: Sucursal actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sucursal'
 *       404:
 *         description: Sucursal no encontrada
 */
router.put("/sucursales/:id", updateById);

/**
 * @openapi
 * /api/sucursales/{id}:
 *   delete:
 *     summary: Eliminar una sucursal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la sucursal
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucursal eliminada correctamente
 *       404:
 *         description: Sucursal no encontrada
 */
router.delete("/sucursales/:id", deleteById);

export { router, getById, getAll, save, updateById, deleteById };
