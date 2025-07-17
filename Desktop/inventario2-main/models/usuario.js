const db = require('../config/config');
const Usuario = {};





// Insertar datos en la tabla usuarios
 Usuario.registrarUsuario = async (datos) => {
      const sql = `
    INSERT INTO public.usuarios
       (nombre_usuario, 
       telefono_usuario, 
       email_usuario, 
       password, 
       rol)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING 
        id_usuario, 
        nombre_usuario, 
        telefono_usuario, 
        email_usuario, 
        password, 
        rol
`;

        return db.one(sql, [
            datos.nombre_usuario,
            datos.telefono_usuario,
            datos.email_usuario,
            datos.password,
            datos.rol
        ]);
     };





//OBTENER TODOS LOS USUARIOS
  Usuario.getAll = () => {
      const sql = 'SELECT * FROM public.usuarios';
      return db.manyOrNone(sql);
  }




//BUSCAR POR NOMBRE DEL USUARIO
  Usuario.buscarPorNombre = async (nombre) => {
    const sql = `
      SELECT * FROM usuarios
      WHERE nombre_usuario ILIKE '%$1:value%'
      ORDER BY nombre_usuario ASC
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




// //BUSCAR POR ID DEL CLIENTE
//  Cliente.buscarPorId = async (Id) => {
//    const sql = `
//      SELECT * FROM clientes
//      WHERE id_cliente = $1
//      ORDER BY id_cliente ASC
//    `;

//    try {
//      const result = await db.any(sql, [Id]);
//      console.log('Filas obtenidas:', result);
//      return result;
//    } catch (error) {
//      console.error('Error en la consulta:', error.message || error);
//      throw error; 
//    }
//  };




// //ELIMINAR POR ID
//  Cliente.eliminarPorId = async (Id) => {
//    const sql = `
//      DELETE FROM clientes
//      WHERE id_cliente = $1
//    `;

//    try {
//      const result = await db.result(sql, [Id]);
//      console.log(`Filas eliminadas: ${result.rowCount}`);
//      return result.rowCount; 
//    } catch (error) {
//      console.error('Error al eliminar:', error.message || error);
//      throw error;
//    }
//  };




// //ACTUALIZAR POR ID
//  Cliente.actualizarPorId = async (id_cliente, datos) => {
//    const {
//      nombre_cliente,
//      telefono_cliente,
//      email_cliente,
//      direccion_cliente,
//      tipo_cliente
//    } = datos;

//    const sql = `
//      UPDATE clientes
//      SET 
//        nombre_cliente = $1,
//        telefono_cliente = $2,
//        email_cliente = $3,
//        direccion_cliente = $4,
//        tipo_cliente = $5
//      WHERE id_cliente = $6
//    `;

//    const values = [
//      nombre_cliente,
//      telefono_cliente,
//      email_cliente,
//      direccion_cliente,
//      tipo_cliente,
//      id_cliente,
//    ];

//    try {
//      const result = await db.result(sql, values);
//      console.log(`Filas actualizadas: ${result.rowCount}`);
//      return result.rowCount;
//    } catch (error) {
//      console.error('Error al actualizar:', error.message || error);
//      throw error;
//    }
//  };




module.exports = Usuario;
