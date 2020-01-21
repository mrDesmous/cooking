const express =require('express');
const app = express();
const mongoose =require('mongoose');
const bodyparser=require('body-parser');
require('dotenv/config');

//MIDLEWARE

app.use(bodyparser.json());

//IMPORT ROUTES
const productoRoute =require('./routes/producto.route');

app.use('/producto',productoRoute);

//RUTA
app.get('/',(req,res) =>{
    res.send('Pacha Restaurant');
})

app.get('/posts',(req,res) =>{
    res.send('Agregado Pacha Restaurant');
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