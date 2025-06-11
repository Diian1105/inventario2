const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');


router.get('/getAllProductos', productoController.getAllProductos);
router.post('/registrarProducto', productoController.registrarProducto);
router.get('/buscarPorNombre/:nombre', productoController.buscarPorNombre);
router.get('/buscarPorId/:Id', productoController.buscarPorId);
router.get('/eliminarPorId/:Id',productoController.eliminarPorId)


module.exports= router;