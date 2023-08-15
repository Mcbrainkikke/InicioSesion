const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Victor:900521@cluster0.c2z2mol.mongodb.net/?retryWrites=true&w=majority');
const miconexion = mongoose.connection;

miconexion.on('connected', ()=>{
    console.log('Conexion exitosa');
});

miconexion.on('error', ()=>{
    console.log('No se pudo establecer conexion con la base de datos.');
});

module.exports = mongoose;