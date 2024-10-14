// Modelo de Producto
import mongoose from "mongoose";

const professorSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    subject: String
})

const Professor = mongoose.model('Professor', professorSchema);

export default Professor