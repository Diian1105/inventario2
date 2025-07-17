const Usuario = require ('../models/usuario');
//const clienteModel = require('../models/cliente');
const usuarioController = {};



//REGISTRAR USUARIO
 usuarioController.registrarUsuario = async (req, res, next) => {
     try {
         const usuario = req.body;
         console.log("Usuario recibido:", usuario);

         if (!usuario.nombre_usuario ||
             !usuario.telefono_usuario ||
             !usuario.email_usuario ||
             !usuario.password ||
             !usuario.rol) {

                 return res.status(400).json({
                     success: false,
                     message: "Falta campos requeridos",
                 });
             }

             const nuevoUsuario = await Usuario.registrarUsuario(usuario);

             return res.status (201).json({
                 success: true,
                 message:"Usuario registrado correctamente",
                 data: nuevoUsuario
             });
     } catch (error) {
         console.error(error);
         return res.status(500).json({
             success: false,
             message:"Error al registrar usuario",
             error: error.message
         });
     }
 };





//OBTENER TODOS LOS USUARIOS
 usuarioController.getAllUsuario = async (req, res) => {
      try {
          const usuarios = await Usuario.getAll();
          res.status(200).json(usuarios);
      } catch (error) {
          console.error(error);
          res.status(500).json({ message:"Error al obtener usuarios"});
      }
  };




// BUSCAR POR NOMBRE DEL CLIENTE
  usuarioController.buscarPorNombre = async (req, res) => {
    try {
      const { nombre } = req.params;
      console.log('Nombre recibido:', nombre);

      if (!nombre) {
        return res.status(400).json({ success: false, message: 'Nombre requerido' });
      }

      const resultados = await   Usuario.buscarPorNombre(nombre);
    
      if (resultados.length === 0) {
        return res.status(200).json({ 
          success: true, 
          message: "No se encontraron usuarios", 
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





// //BUSCAR POR ID DEL CLIENTE

//  clienteController.buscarPorId = async (req, res) => {
//    try {
//      const { Id } = req.params;
//      console.log('Id recibido:', Id);

//      if (!Id) {
//        return res.status(400).json({ success: false, message: 'Id requerido' });
//      }

//      const resultados = await Cliente.buscarPorId(Id);
    
//      if (resultados.length === 0) {
//        return res.status(200).json({ 
//          success: true, 
//          message: "No se encontró Id", 
//          data: [] 
//        });
//      }

//      return res.status(200).json({ success: true, data: resultados });

//    } catch (error) {
//      console.error('Error en controlador:', error.message);
//      return res.status(500).json({ 
//        success: false, 
//        message: 'Error interno del servidor',
//        error: error.message 
//      });
//    }
//  };




// //ELIMINAR POR ID
//  clienteController.eliminarPorId = async (req, res) => {
//    try {
//      const { Id } = req.params;
//      console.log('Id recibido para eliminar:', Id);

//      if (!Id) {
//        return res.status(400).json({ success: false, message: 'Id requerido para eliminar'});
//      }
//      const filasEliminadas = await Cliente.eliminarPorId(Id);

//      if (filasEliminadas === 0) {
//        return res.status(400).json({ success: false, message: 'No se encontró cliente con ese Id'});
//      }
//      return res.status(200).json({ success: true, message: 'Cliente eliminado correctamente'});
//    } catch (error) {
//      console.error('Error en controlador al eliminar:', error.mesaage);
//      return res.status(500).json({
//        success: false,
//        message: 'Error interno del servidor al eliminar',
//        error: errror.message
//      });
//    }
//  };




// //ACTUALIZAR POR ID
//  clienteController.actualizarPorId = async (req, res) => {
//    const id_cliente = req.params.id;
//    const datos = req.body;

//    if (!id_cliente) {
//      return res.status(400).json({ message: 'El id_cliente es requerido' });
//    }

//    try {
//      const filasActualizadas = await Cliente.actualizarPorId(id_cliente, datos);

//      if (filasActualizadas === 0) {
//        return res.status(404).json({ message: 'Cliente no encontrado' });
//      }

//      res.json({ message: 'Cliente actualizado correctamente' });
//    } catch (error) {
//      console.error('Error en controlador actualizarPorId:', error);
//      res.status(500).json({ message: 'Error al actualizar el cliente' });
//    }
//  };



module.exports = usuarioController;
