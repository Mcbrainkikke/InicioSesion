const mongoose = require('mongoose');
const usuarioSchema = mongoose.Schema({
    username: String,
    password: String
});


module.exports = mongoose.model('Usuario', usuarioSchema);