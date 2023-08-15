const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//importa rutas de usuarios
const rutasUsuarios = require('./routes/routes_usuarios');

app.use(bodyParser.json());
app.use(cors());

//const postRoute = require('./routes/routes_usuarios');

app.use('/usuarios', rutasUsuarios);

//conexion a la base de datos
require('./conexion');

//inicializar el servidor
const PORT = 666;
app.listen(PORT, function()
{
    console.log('Servidor corriendo en... http://127.0.0.1:666');
});

app.get('/', function(req, res)
{
    res.send('Servidor ok')
});