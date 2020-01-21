const express =require('express');
const router = express.Router();
const Producto = require('../models/Producto.model');

//LISTAR TODO
router.get('/',async (req,res) =>{
    // res.send('Yadqweqwe');
    try {
        const listas =  await Producto.find();
        res.json(listas);
    } catch (err) {
        res.json(err);
    }
});
//LISTAR UNO
router.get('/:id',async (req,res) =>{
    try {
        const lista =  await Producto.findById(req.params.id);
        res.json(lista);
    } catch (err) {
        res.json(err);
    }
});

//AGREGAR
router.post('/', async (req,res)=>{
    const producto = new Producto({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
    });
    try {
        const saveProducto = await producto.save();
        res.json(saveProducto);
    } catch (err) {
        res.json({message : err});
    }
    // console.log(req.body);
});

//ELIMINAR
router.delete('/:id',async (req,res) =>{
   try {
       const removeProducto = await Producto.remove({_id: req.params.id});
       res.json(removeProducto);
   } catch (err) {
       res.json({message: err});
   }
});

//ACTUALIZAR
router.put('/:id',async (req,res)=>{
    try {
        const updateProducto = await Producto.updateOne(
            {_id: req.params.id},
            {$set:{nombre: req.body.nombre}}
        );
        res.json(updateProducto);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports= router;