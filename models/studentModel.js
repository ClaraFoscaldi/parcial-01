// Modelo de Producto
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    subject: String
})

const Student = mongoose.model('Student', studentSchema);

export default Student