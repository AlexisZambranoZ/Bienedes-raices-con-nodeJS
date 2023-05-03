import express from 'express';
import usuarioRoutes from  './routes/usuarioRoute.js'

//Crear la app
const app = express()

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