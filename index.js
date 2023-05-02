
import express from 'express';

//Crear la app
const app = express()

app.get('/', function (req, resp) {
    resp.send(`Hola mundo en express`)
})

app.get('/nosotros', function (req, resp) {
    resp.send(`Hola desde nosotros`)
})

//Definir el puerto
const port = 3000

app.listen(port, () => {
    console.log("Servidor Funcionando en el puerto", port);
})