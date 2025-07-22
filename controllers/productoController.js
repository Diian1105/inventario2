
//const productoModels = require('../models/producto');
const Producto = require('../models/producto');

const productoController = {};

//OBTENER TODOS LOS PRODUCTOS
productoController.getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.getAll();
        res.status(200).json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message:"Error al obtener los productos"});
    }
};


//REGISTRAR PRODUCTOS
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

        productoNuevo = await Producto.registrarProducto(req.body);

         return res.status(201).json({
            success: true,
            message: "Producto registrado correctamente",
            data: productoNuevo
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





//BUSCAR POR ID DEL PRODUCTO

productoController.buscarPorId = async (req, res) => {
  try {
    const { Id } = req.params;
    console.log('Id recibido:', Id);

    if (!Id) {
      return res.status(400).json({ success: false, message: 'Id requerido' });
    }

    const resultados = await Producto.buscarPorId(Id);
    
    if (resultados.length === 0) {
      return res.status(200).json({ 
        success: true, 
        message: "No se encontró Id", 
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



//ELIMINAR POR ID
productoController.eliminarPorId = async (req, res) => {
  try {
    const { Id } = req.params;
    console.log('Id recibido para eliminar:', Id);

    if (!Id) {
      return res.status(400).json({ success: false, message: 'Id requerido para eliminar'});
    }
    const filasEliminadas = await Producto.eliminarPorId(Id);

    if (filasEliminadas === 0) {
      return res.status(400).json({ success: false, message: 'No se encontró producto con ese Id'});
    }
    return res.status(200).json({ success: true, message: 'Producto eliminado correctamente'});
  } catch (error) {
    console.error('Error en controlador al eliminar:', error.mesaage);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor al eliminar',
      error: errror.message
    });
  }
};



//ACTUALIZAR POR ID

productoController.actualizarPorId = async (req, res) => {
  const id_producto = req.params.id;
  const datos = req.body;

  if (!id_producto) {
    return res.status(400).json({ message: 'El id_producto es requerido' });
  }

  try {
    const filasActualizadas = await Producto.actualizarPorId(id_producto, datos);

    if (filasActualizadas === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    console.error('Error en controlador actualizarPorId:', error);
    res.status(500).json({ message: 'Error al actualizar el producto' });
  }
};



//SUBIR Y ACTUALIZAR IMAGEN 

//const { Pool } = require('pg');
//const pool = new Pool({ /* tu configuración de conexión */ });

productoController.actualizarImagen = async (req, res) => {
  try {
    const id = req.params.id;
    const nombreProducto = req.body.nombreProducto; 

    if (!req.file) {
      return res.status(400).json({ error: 'No se subió ninguna imagen' });
    }
    if (!nombreProducto) {
      return res.status(400).json({ error: 'Falta el nombre del producto' });
    }

    const nombreArchivo = req.file.filename;

    // Usa el método del modelo para actualizar ambos campos
    await Producto.actualizarImagen(id, nombreProducto, nombreArchivo);

    res.json({ mensaje: 'Producto e imagen actualizados correctamente' });
  } catch (error) {
    console.error('Error al actualizar imagen:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};








module.exports = productoController;