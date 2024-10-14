import express from "express";
import { createStudent, getStudent, getStudentById, deleteStudentById} from "../controllers/studentController.js";
const router = express.Router();

router.use( express.json());


router.get('/', getStudent)

//Retorna por id
router.get('/:id', getStudentById)

//Crea la clase
router.post('/', createStudent)

//Elimminar la clase
router.delete('/:id', deleteStudentById)

export default router;