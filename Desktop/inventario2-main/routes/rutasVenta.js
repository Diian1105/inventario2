const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');




// RUTAS

router.post('/registrarVenta', ventaController.registrarVenta);
// router.get('/getAllUsuarios', usuarioController.getAllUsuario);
// router.get('/buscarPorNombre/:nombre', usuarioController.buscarPorNombre);
// router.get('/buscarPorId/:Id', usuarioController.buscarPorId);
// router.get('/eliminarPorId/:Id',usuarioController.eliminarPorId);
// router.put('/actualizarPorId/:id', usuarioController.actualizarPorId);


module.exports= router;