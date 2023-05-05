import express from 'express';
import usuarioRoutes from  './routes/usuarioRoute.js'
import db from './config/db.js';

//Crear la app
const app = express()

//Hablilitar lectura
app.use(express.urlencoded({extenden:true}) )

// Conexion a la base de datos
try {
    await db.authenticate();
    db.sync()
    console.log('Conexión correcta a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
  
//Habilitar Pug
app.set('view engine', 'pug')
app.set('views','./views')

//Routing
app.use('/auth', usuarioRoutes)

//Carpeta Publica
app.use( express.static('public'))

//Definir el puerto
const port = 3000

app.listen(port, () => {
    console.log("Servidor Funcionando en el puerto", port);
})