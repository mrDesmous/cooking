const express =require('express');
const router = express.Router();
const Detalle = require('../models/Detalleproducto.model');

//LISTAR TODO
router.get('/',async (req,res) =>{
    // res.send('Yadqweqwe');
    try {
        const listas =  await Detalle.find();
        res.json(listas);
    } catch (err) {
        res.json(err);
    }
});
//LISTAR UNO
router.get('/:id',async (req,res) =>{
    try {
        const lista =  await Detalle.findById(req.params.id);
        res.json(lista);
    } catch (err) {
        res.json(err);
    }
});

//AGREGAR
router.post('/', async (req,res)=>{
    const detalle = new Detalle({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
    });
    try {
        const saveDetalle = await detalle.save();
        res.json(saveDetalle);
    } catch (err) {
        res.json({message : err});
    }
    // console.log(req.body);
});

//ELIMINAR
router.delete('/:id',async (req,res) =>{
   try {
       const removeDetalle = await Detalle.remove({_id: req.params.id});
       res.json(removeDetalle);
   } catch (err) {
       res.json({message: err});
   }
});

//ACTUALIZAR
router.put('/:id',async (req,res)=>{
    try {
        const updateDetalle = await Detalle.updateOne(
            {_id: req.params.id},
            {$set:{nombre: req.body.nombre}}
        );
        res.json(updateDetalle);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports= router;