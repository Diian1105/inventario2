const db = require ('../config/config');

const Producto = {};

//Obtener todos los productos  
Producto.getAll = () => {
    const sql = 'SELECT * FROM public.productos';
    return db.manyOrNone(sql);
}


//Insertar datos a la tabla productos

Producto.registrarProducto = async (datos) => {
    const sql = 'INSERT INTO public.productos (id_producto, nombre_producto, descripcion_producto, codigo_barras, sku, precio_compra, precio_venta, precio_total, stock_actual, stock_minimo, stock_maximo, id_categoria, id_proveedor, fecha_creacion, estado, codigo_qr, imagen_producto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING id_producto';
    return db.manyOrNone(sql, [datos.id_producto, datos.nombre_producto, datos.descripcion_producto, datos.codigo_barras, datos.sku, datos.precio_compra, datos.precio_venta, datos.precio_total, datos.stock_actual, datos.stock_minimo, datos.stock_maximo, datos.id_categoria,datos.id_proveedor, datos.fecha_creacion,datos.estado, datos.codigo_qr, datos.imagen_producto ]);
}





module.exports = Producto;


