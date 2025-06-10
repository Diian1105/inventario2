const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const productoController = require('../controllers/productoController');


router.get('/getAllProductos', productoController.getAllProductos);
router.post('/registrarProducto', productoController.registrarProducto);
router.get('/buscarPorNombre/:nombre', productoController.buscarPorNombre);





=======
const productosController =require('../controllers/productoController');


router.get('/getAllProductos', productosController.getAllProductos);
router.post('/registrarProducto', productosController.registrarProducto);
>>>>>>> d45678c032523e034c880c3590f0c8792efe7fbe

module.exports= router;