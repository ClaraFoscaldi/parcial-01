import express from "express";
import { createClase, getClase, getClaseById, deleteClaseById} from "../controllers/claseController.js";

//En este archivo no tenemos acceso a la app, por eso 
//generamos un router específico para cada endPoint
const router = express.Router();
router.use( express.json());

//APARECEN TODAS LAS CLASES... DE X MATERIA

//Retorna todas las clases
router.get('/', getClase)

//Retorna por id
router.get('/:id', getClaseById)

//Crea la clase
router.post('/', createClase)

//Elimminar la clase
router.delete('/:id', deleteClaseById)

export default router;