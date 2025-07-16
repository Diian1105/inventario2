const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');




// RUTAS

router.post('/registrarProveedor', proveedorController.registrarProveedor);
router.get('/getAllProveedor', proveedorController.getAllProveedor);



module.exports= router;