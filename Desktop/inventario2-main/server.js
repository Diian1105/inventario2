const express = require('express');
const app = express();


const http = require('http');
const server = http.createServer(app); 

const cors = require('cors');
const path = require('path');

//rutas
const producto= require('./routes/rutasProducto');


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.set('x-powered-by', false);

const port = 3000;

app.use('/api/productos', producto);


app.get('/', (req, res)=>{
    res.send('Ruta raiz del Backend');
});

app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(err.status || 500).send({
    success: false,
    message: err.message || 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.stack : {}, // stacktrace sólo en dev
  });
});

/// Configuración del servidor
server.listen(port, '0.0.0.0', () => {
  console.log(`Aplicación de NodeJS arrancada en el puerto ${port}`);
});

module.exports = {
  app: app,
  server: server,
};