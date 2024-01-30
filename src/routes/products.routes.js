import { Router } from "express";
import { getAll, getOne, insertOne } from "../controllers/products.controller.js";

const router = Router();

// Ruta para obtener todos los productos
router.get('/getAll', getAll);

// Ruta para obtener un solo producto por código de barras
router.get('/getOne/:barcode', getOne);

// Ruta para insertar un producto
router.get('/insertOne', insertOne);

export default router;
