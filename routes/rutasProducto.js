const express = require('express');
const router = express.Router();
const productosController =require('../controllers/productoController');


router.get('/getAllProductos', productosController.getAllProductos);

module.exports= router;