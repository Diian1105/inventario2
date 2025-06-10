const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');


router.get('/getAllProductos', productoController.getAllProductos);
router.post('/registrarProducto', productoController.registrarProducto);
router.get('/buscarPorNombre/:nombre', productoController.buscarPorNombre);






module.exports= router;