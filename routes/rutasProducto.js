const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');


router.get('/getAllProductos', productoController.getAllProductos);
router.post('/registrarProducto', productoController.registrarProducto);
router.get('/buscarPorNombre/:nombre', productoController.buscarPorNombre);






const productosController =require('../controllers/productoController');


router.get('/getAllProductos', productosController.getAllProductos);
router.post('/registrarProducto', productosController.registrarProducto);

module.exports= router;