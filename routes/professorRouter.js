import express from "express";
import {  createProfessor, getProfessor, getProfessorById, deleteProfessorById } from "../controllers/professorController.js";
const router = express.Router();

router.use( express.json());

// Retorna todos
router.get('/', getProfessor)

//Retorna por id
router.get('/:id', getProfessorById)


// Agregar 
router.post('/', createProfessor)


// Actualizar
//router.put('/', updateProfessor)

//Dar de baja al (eliminar) Profesor
router.delete('/:id', deleteProfessorById)

export default router;