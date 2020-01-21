const express =require('express');
const router = express.Router();
const Usucategoria = require('../models/Usucategoria.model');

//LISTAR TODO
router.get('/',async (req,res) =>{
    // res.send('Yadqweqwe');
    try {
        const listas =  await Usucategoria.find();
        res.json(listas);
    } catch (err) {
        res.json(err);
    }
});
//LISTAR UNO
router.get('/:id',async (req,res) =>{
    try {
        const lista =  await Usucategoria.findById(req.params.id);
        res.json(lista);
    } catch (err) {
        res.json(err);
    }
});

//AGREGAR
router.post('/', async (req,res)=>{
    const uscategoria = new Usucategoria({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
    });
    try {
        const saveUsucategoria = await uscategoria.save();
        res.json(saveUsucategoria);
    } catch (err) {
        res.json({message : err});
    }
    // console.log(req.body);
});

//ELIMINAR
router.delete('/:id',async (req,res) =>{
   try {
       const removeUsucategoria = await Usucategoria.remove({_id: req.params.id});
       res.json(removeUsucategoria);
   } catch (err) {
       res.json({message: err});
   }
});

//ACTUALIZAR
router.put('/:id',async (req,res)=>{
    try {
        const updateUsucategoria = await Usucategoria.updateOne(
            {_id: req.params.id},
            {$set:{nombre: req.body.nombre}}
        );
        res.json(updateUsucategoria);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports= router;