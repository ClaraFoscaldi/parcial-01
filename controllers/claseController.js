
import Clase from "../models/claseModel.js";


async function createClase( req, res){
    try {
        
        const newClase = new Clase(req.body);
        await newClase.save();

        res.status(200).json({ newClase});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

async function getClase( req, res){
    try {
        const clases = await Clase.find()
        console.log(clases)
        res.status(200).json({ message: 'Ok', data: clases});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

const getClaseById = async (req, res) => {
        try {
            const id = req.params.id;
            const clase = await Clase.findById(id)
                if(clase){
                    res.status(200).json({message: 'Ok', data: clase});
                }else{
                    res.status(404).json({message: 'Clase no encontrada', data:{}})
                }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error, data: []});
        }
}

const deleteClaseById = async (req, res) => {
    try {
        const id = req.params.id;
        const clases = await Clase.findByIdAndDelete(id)
        res.status(200).json({message: 'Ok', data: clases});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

// Exporto las funciones
export { createClase, getClase, getClaseById, deleteClaseById}