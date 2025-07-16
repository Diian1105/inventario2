const db = require('../config/config');
const Cliente = {};





// Insertar datos en la tabla clientes
Cliente.registrarCliente = async (datos) => {
     const sql = `
         INSERT INTO public.clientes 
            (id_cliente, 
            nombre_cliente, 
            telefono_cliente,
            email_cliente,
            direccion_cliente,
            tipo_cliente)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING 
            id_cliente, 
            nombre_cliente, 
            telefono_cliente,
            email_cliente,
            direccion_cliente,
            tipo_cliente
     `;
     return db.one(sql, [datos.id_cliente, 
                        datos.nombre_cliente,
                        datos.telefono_cliente,
                        datos.email_cliente,
                        datos.direccion_cliente,
                        datos.tipo_cliente]);
    };





//OBTENER TODOS LOS CLIENTES
 Cliente.getAll = () => {
     const sql = 'SELECT * FROM public.clientes';
     return db.manyOrNone(sql);
 }




//BUSCAR POR NOMBRE DEL CLIENTE
 Cliente.buscarPorNombre = async (nombre) => {
   const sql = `
     SELECT * FROM clientes
     WHERE nombre_cliente ILIKE '%$1:value%'
     ORDER BY nombre_cliente ASC
   `;

   try {
     const result = await db.any(sql, [nombre]);
     console.log('Filas obtenidas:', result);
     return result;
   } catch (error) {
     console.error('Error en la consulta:', error.message || error);
     throw error; 
   }
 };




// //BUSCAR POR ID DE LA CATEGORIA
// Categoria.buscarPorId = async (Id) => {
//   const sql = `
//     SELECT * FROM categorias
//     WHERE id_categoria = $1
//     ORDER BY id_categoria ASC
//   `;

//   try {
//     const result = await db.any(sql, [Id]);
//     console.log('Filas obtenidas:', result);
//     return result;
//   } catch (error) {
//     console.error('Error en la consulta:', error.message || error);
//     throw error; 
//   }
// };




// //ELIMINAR POR ID
// Categoria.eliminarPorId = async (Id) => {
//   const sql = `
//     DELETE FROM categorias
//     WHERE id_categoria = $1
//   `;

//   try {
//     const result = await db.result(sql, [Id]);
//     console.log(`Filas eliminadas: ${result.rowCount}`);
//     return result.rowCount; 
//   } catch (error) {
//     console.error('Error al eliminar:', error.message || error);
//     throw error;
//   }
// };




// //ACTUALIZAR POR ID
// Categoria.actualizarPorId = async (id_categoria, datos) => {
//   const {
//     nombre_categoria,
//     descripcion_categoria,
//   } = datos;

//   const sql = `
//     UPDATE categorias
//     SET 
//       nombre_categoria = $1,
//       descripcion_categoria = $2
//     WHERE id_categoria = $3
//   `;

//   const values = [
//     nombre_categoria,
//     descripcion_categoria,
//     id_categoria,
//   ];

//   try {
//     const result = await db.result(sql, values);
//     console.log(`Filas actualizadas: ${result.rowCount}`);
//     return result.rowCount;
//   } catch (error) {
//     console.error('Error al actualizar:', error.message || error);
//     throw error;
//   }
// };







module.exports = Cliente;
