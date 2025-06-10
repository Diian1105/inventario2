const promise = require('bluebird');

const options = {
  promiseLib: promise,
  query: (e) => {
    console.log('Consulta ejecutada:', e.query);
    console.log('Parámetros:', e.params);
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
  port: 5432, 
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