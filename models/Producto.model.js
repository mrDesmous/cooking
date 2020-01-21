const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,

    }

});

module.exports= mongoose.model('Producto',ProductoSchema);