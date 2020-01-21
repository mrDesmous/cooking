const express =require('express');
const router = express.Router();
const Pedido = require('../models/Pedido.model');

//LISTAR TODO
router.get('/',async (req,res) =>{
    // res.send('Yadqweqwe');
    try {
        const listas =  await Pedido.find();
        res.json(listas);
    } catch (err) {
        res.json(err);
    }
});
//LISTAR UNO
router.get('/:id',async (req,res) =>{
    try {
        const lista =  await Pedido.findById(req.params.id);
        res.json(lista);
    } catch (err) {
        res.json(err);
    }
});

//AGREGAR
router.post('/', async (req,res)=>{
    const pedido = new Pedido({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
    });
    try {
        const savePedido = await pedido.save();
        res.json(savePedido);
    } catch (err) {
        res.json({message : err});
    }
    // console.log(req.body);
});

//ELIMINAR
router.delete('/:id',async (req,res) =>{
   try {
       const removePedido = await Pedido.remove({_id: req.params.id});
       res.json(removePedido);
   } catch (err) {
       res.json({message: err});
   }
});

//ACTUALIZAR
router.put('/:id',async (req,res)=>{
    try {
        const updatePedido = await Pedido.updateOne(
            {_id: req.params.id},
            {$set:{nombre: req.body.nombre}}
        );
        res.json(updatePedido);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports= router;