const mongoose = require('mongoose');
const DetalleSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,

    }

});

module.exports= mongoose.model('Detalle',DetalleSchema);