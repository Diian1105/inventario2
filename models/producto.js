const db = require ('../config/config');

const Producto = {};

//Obtener todos los productos
Producto.getAll = () => {
    const sql = 'SELECT * FROM public.productos';
    return db.manyOrNone(sql);
}


module.exports = Producto;