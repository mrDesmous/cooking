const express =require('express');
const app = express();
const mongoose =require('mongoose');
const bodyparser=require('body-parser');
require('dotenv/config');

//MIDLEWARE

app.use(bodyparser.json());

//IMPORT ROUTES
const productoRoute =require('./routes/producto.route');
const menuRouter = require('./routes/menu.route');
const pedidoRouter = require('./routes/pedido.route');
const usuarioRouter= require('./routes/usuario.route');
const usucategoriaRouter =require('./routes/usucategoria.route');
const ubicacionRouter= require('./routes/ubicacion.route');
const detalleRouter = require('./routes/detalleproducto.route');

app.use('/producto',productoRoute);
app.use('/menu',menuRouter);
app.use('/pedido',pedidoRouter);
app.use('/usuario',usuarioRouter);
app.use('/categoria',usucategoriaRouter);
app.use('/ubicacion',ubicacionRouter);
app.use('/detalle',detalleRouter);

//RUTA
app.get('/',(req,res) =>{
    res.send('Pacha Restaurant');
})

//BD
//?retryWrites=true&w=majority

mongoose.connect(
    process.env.DB_CONNECTION,
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
    () => console.log('DB Conectado')
);
//PUERTO
app.listen(4000,(req,res) =>{
    console.log('Servidor Iniciado')
});