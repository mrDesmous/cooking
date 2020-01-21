const mongoose = require('mongoose');
const UbicacionSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,

    }

});

module.exports= mongoose.model('Ubicacion',UbicacionSchema);