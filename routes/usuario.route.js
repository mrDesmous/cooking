const express =require('express');
const router = express.Router();
const Usuario = require('../models/Usuario.model');

//LISTAR TODO
router.get('/',async (req,res) =>{
    // res.send('Yadqweqwe');
    try {
        const listas =  await Usuario.find();
        res.json(listas);
    } catch (err) {
        res.json(err);
    }
});
//LISTAR UNO
router.get('/:id',async (req,res) =>{
    try {
        const lista =  await Usuario.findById(req.params.id);
        res.json(lista);
    } catch (err) {
        res.json(err);
    }
});

//AGREGAR
router.post('/', async (req,res)=>{
    const usuario = new Usuario({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.params.categoria
    });
    try {
        const saveUsuario = await usuario.save();
        res.json(saveUsuario);
    } catch (err) {
        res.json({message : err});
    }
    // console.log(req.body);
});

//ELIMINAR
router.delete('/:id',async (req,res) =>{
   try {
       const removeUsuario = await Usuario.remove({_id: req.params.id});
       res.json(removeUsuario);
   } catch (err) {
       res.json({message: err});
   }
});

//ACTUALIZAR
router.put('/:id',async (req,res)=>{
    try {
        const updateUsuario = await Usuario.updateOne(
            {_id: req.params.id},
            {$set:{nombre: req.body.nombre}}
        );
        res.json(updateUsuario);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports= router;