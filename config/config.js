const promise = require('bluebird');

const options = {
  promiseLib: promise,
  query: (e) => {
    console.log('Consulta ejecutada:', e.query);
<<<<<<< HEAD
    console.log('Parámetros:', e.params);
=======
>>>>>>> d45678c032523e034c880c3590f0c8792efe7fbe
  },
};

const pgpLib = require('pg-promise');
const pgp = pgpLib(options); // Aquí ya puedes usar `pgp.pg.types`

// Configurar parseo de timestamp sin zona horaria como string
const types = pgp.pg.types;
types.setTypeParser(1114, (stringValue) => stringValue);

// Configuración de la base de datos
const dataBaseConfig = {
  host: 'aws-0-us-east-2.pooler.supabase.com', 
<<<<<<< HEAD
  port: 5432, 
=======
  port: 6543, 
>>>>>>> d45678c032523e034c880c3590f0c8792efe7fbe
  database: 'postgres', 
  user: 'postgres.jmvfgqkginlpubpzjdrw',     
  password: 'abksdbasjdkasgdhjadgsdfhsdcadbn',
};

// Crear conexión
const db = pgp(dataBaseConfig);

// Probar conexión con una consulta simple
db.connect()
  .then(obj => {
    console.log('✅ Conexión exitosa a la base de datos PostgreSQL');
    obj.done(); // cerrar la conexión
  })
  .catch(error => {
    console.error('❌ Error al conectar con la base de datos:', error.message || error);
  });

module.exports = db;