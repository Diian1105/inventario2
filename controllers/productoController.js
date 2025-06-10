<<<<<<< HEAD
//const productoModels = require('../models/producto');
const Producto = require('../models/producto');

const productoController = {};

//OBTENER TODOS LOS PRODUCTOS
=======
const productoModels = require('../models/producto');


const productoController = {};

//Obtener todos los productos
>>>>>>> d45678c032523e034c880c3590f0c8792efe7fbe
productoController.getAllProductos = async (req, res) => {
    try {
        const productos = await productoModels.getAll();
        res.status(200).json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message:"Error al obtener los productos"});
    }
};


<<<<<<< HEAD
//REGISTRAR PRODUCTOS
=======
//Registrar Productos
>>>>>>> d45678c032523e034c880c3590f0c8792efe7fbe
productoController.registrarProducto = async (req, res, next) => {
    try {
       const producto = req.body;
        console.log("Producto registrado:", producto); 
        
        if (!producto.id_producto || 
            !producto.nombre_producto || 
            !producto.descripcion_producto || 
            !producto.codigo_barras || 
            !producto.sku || 
            !producto.precio_compra || 
            !producto.precio_venta || 
            !producto.precio_total || 
            !producto.stock_actual || 
            !producto.stock_minimo || 
            !producto.stock_maximo || 
            !producto.id_categoria || 
            !producto.id_proveedor || 
            !producto.fecha_creacion || 
            !producto.estado || 
            !producto.codigo_qr ) {
    
            return res.status(400).json({
                success: false,
                message: "Faltan campos requeridos",
            });
        }

        const nuevoProducto = await productoModels.registrarProducto(req.body);

         return res.status(201).json({
            success: true,
            message: "Producto registrado correctamente",
            data: nuevoProducto
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error al registrar producto",
            error: error.message
        });
    }
};



<<<<<<< HEAD

//BUSCAR POR NOMBRE DEL PRODUCTO

productoController.buscarPorNombre = async (req, res) => {
  try {
    const { nombre } = req.params;
    console.log('Nombre recibido:', nombre);

    if (!nombre) {
      return res.status(400).json({ success: false, message: 'Nombre requerido' });
    }

    const resultados = await Producto.buscarPorNombre(nombre);
    
    if (resultados.length === 0) {
      return res.status(200).json({ 
        success: true, 
        message: "No se encontraron productos", 
        data: [] 
      });
    }

    return res.status(200).json({ success: true, data: resultados });

  } catch (error) {
    console.error('Error en controlador:', error.message);
    return res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor',
      error: error.message 
    });
  }
};






=======
>>>>>>> d45678c032523e034c880c3590f0c8792efe7fbe
module.exports = productoController;



