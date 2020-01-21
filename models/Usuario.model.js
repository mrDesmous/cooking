const mongoose = require('mongoose');
const UsuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,

    },
    categoria:{
        type:String,
    }


});

module.exports= mongoose.model('Usuario',UsuarioSchema);