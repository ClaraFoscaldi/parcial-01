// Importamos los Routers 
import professorRouter from './professorRouter.js'
import studentRouter from './studentRouter.js'
import claseRouter from './claseRouter.js'

// Está función recibe la apliacación como parámetro de entrada
export  function routerAPI(app){
	// Definimos los endPoints
    app.use('/professor', professorRouter);
    app.use('/student', studentRouter);
    app.use('/clase', claseRouter);
}

