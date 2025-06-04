const productoModels = require('../models/producto');


const productoController = {};

//Obtener todos los productos
productoController.getAllProductos = async (req, res) => {
    try {
        const productos = await productoModels.getAll();
        res.status(200).json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message:"Error al obtener los productos"});
    }
};



module.exports = productoController;