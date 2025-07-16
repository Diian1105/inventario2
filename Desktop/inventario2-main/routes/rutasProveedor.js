const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');




// RUTAS

router.post('/registrarProveedor', proveedorController.registrarProveedor);
router.get('/getAllProveedor', proveedorController.getAllProveedor);
router.get('/buscarPorNombre/:nombre', proveedorController.buscarPorNombre);
router.get('/buscarPorId/:Id', proveedorController.buscarPorId);



module.exports= router;