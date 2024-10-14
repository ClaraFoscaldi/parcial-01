
import Professor from "../models/professorModel.js";


async function createProfessor( req, res  ){
    try {
        
        const newProfessor = new Professor(req.body);
        await newProfessor.save();

        res.status(200).json({ newProfessor});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

async function getProfessor( req, res){
    try {
        
        const professors = await Clase.find()
        console.log(professors)
        res.status(200).json({ message: 'Ok', data: professors});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

const getProfessorById = async (req, res) => {
    try {
        const id = req.params.id;
        const professors = await Professor.findById(id)
        res.status(200).json({message: 'Ok', data: professors});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}
//Un profe se da de "baja"
const deleteProfessorById = async (req, res) => {
    try {
        const id = req.params.id;
        const professors = await Professor.findByIdAndDelete(id)
        res.status(200).json({message: 'Ok', data: professors});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}
// Exporto las funciones
export { createProfessor, getProfessor, getProfessorById, deleteProfessorById}