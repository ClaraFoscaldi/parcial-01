
import Student from "../models/studentModel.js";


async function createStudent( req, res  ){
    try {
        
        const newStudent = new Student(req.body);
        await newStudent.save();

        res.status(200).json({ newStudent});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

async function getStudent( req, res){
    try {
        
        const students = await Clase.find()
        console.log(students)
        res.status(200).json({ message: 'Ok', data: students});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

const getStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findById(id)
        if(student){
            res.status(200).json({message: 'Ok', data: student});
        }else{
            res.status(404).json({message: 'Alumnx no encontradx', data:{}})
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}
//Un/x alumnx se da de "baja"
const deleteStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const students = await Student.findByIdAndDelete(id)
        res.status(200).json({message: 'Ok', data: students});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}
// Exporto las funciones
export { createStudent, getStudent, getStudentById, deleteStudentById}