const express =require('express');
const router = express.Router();
const Ubicacion = require('../models/Ubicacion.model');

//LISTAR TODO
router.get('/',async (req,res) =>{
    // res.send('Yadqweqwe');
    try {
        const listas =  await Ubicacion.find();
        res.json(listas);
    } catch (err) {
        res.json(err);
    }
});
//LISTAR UNO
router.get('/:id',async (req,res) =>{
    try {
        const lista =  await Ubicacion.findById(req.params.id);
        res.json(lista);
    } catch (err) {
        res.json(err);
    }
});

//AGREGAR
router.post('/', async (req,res)=>{
    const ubicacion = new Ubicacion({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
    });
    try {
        const saveUbicacion = await ubicacion.save();
        res.json(saveUbicacion);
    } catch (err) {
        res.json({message : err});
    }
    // console.log(req.body);
});

//ELIMINAR
router.delete('/:id',async (req,res) =>{
   try {
       const removeUbicacion = await Ubicacion.remove({_id: req.params.id});
       res.json(removeUbicacion);
   } catch (err) {
       res.json({message: err});
   }
});

//ACTUALIZAR
router.put('/:id',async (req,res)=>{
    try {
        const updateUbicacion = await Ubicacion.updateOne(
            {_id: req.params.id},
            {$set:{nombre: req.body.nombre}}
        );
        res.json(updateUbicacion);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports= router;