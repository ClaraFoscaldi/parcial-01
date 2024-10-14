// Modelo de Producto
import mongoose from "mongoose";

const claseSchema = new mongoose.Schema({
   title: String,
   date: Date,
   price: Number,
   link: String,
   number_students: Number
})


const Clase = mongoose.model('Clase', claseSchema);
// Exporto el Objeto Clase

export default Clase