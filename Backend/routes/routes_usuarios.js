//importacion de dependencias necesarias
const express = require('express');
const router = express.Router();
const Usuario = require('../models/models_usuarios');

// Ruta para crear un nuevo usuario
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const usuario = await Usuario.create({ username, password });
    res.json({ usuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await Usuario.findOne({ username }); // Busca al usuario por su nombre de usuario
      if (user && user.password === password) {
        // Comprueba si el usuario existe y si la contraseña coincide
        res.json({ message: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al iniciar sesión' });
    }
  });

module.exports = router;
