const express = require('express');
const router = express.Router();
const productosController =require('../controllers/productoController');


router.get('/getAllProductos', productosController.getAllProductos);
router.post('/registrarProducto', productosController.registrarProducto);

module.exports= router;