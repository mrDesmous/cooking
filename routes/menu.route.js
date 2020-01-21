const express =require('express');
const router = express.Router();
const Menu = require('../models/Menu.model');

//LISTAR TODO
router.get('/', async(req,res) =>{
   
    try {
        const listas =  await Menu.find();
        res.json(listas);
        // res.send('Menu mijo Tusa');
    } catch (err) {
        res.json(err);
    }
});
//LISTAR UNO
router.get('/:id',async (req,res) =>{
    try {
        const lista =  await Menu.findById(req.params.id);
        res.json(lista);
    } catch (err) {
        res.json(err);
    }
});

//AGREGAR
router.post('/',async(req,res)=>{
    const menu = new Menu({
            nombres: req.body.nombres,
            descripcion: req.body.descripcion
    });
    try {
        const saveMenu = await menu.save();
        res.json(saveMenu);
    } catch (err) {
        res.json({message : err});
    }
    console.log(req.body);
});

//ELIMINAR
router.delete('/:id',async (req,res) =>{
   try {
       const removeMenu = await Menu.remove({_id: req.params.id});
       res.json(removeMenu);
   } catch (err) {
       res.json({message: err});
   }
});

//ACTUALIZAR
router.put('/:id',async (req,res)=>{
    try {
        const updateMenu = await Menu.updateOne(
            {_id: req.params.id},
            {$set:{nombre: req.body.nombre}}
        );
        res.json(updateMenu);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports= router;