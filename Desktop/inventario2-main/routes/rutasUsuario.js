const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');




// RUTAS

router.post('/registrarUsuario', usuarioController.registrarUsuario);
router.get('/getAllUsuarios', usuarioController.getAllUsuario);
router.get('/buscarPorNombre/:nombre', usuarioController.buscarPorNombre);
// router.get('/buscarPorId/:Id', clienteController.buscarPorId);
// router.get('/eliminarPorId/:Id',clienteController.eliminarPorId);
// router.put('/actualizarPorId/:id', clienteController.actualizarPorId);


module.exports= router;