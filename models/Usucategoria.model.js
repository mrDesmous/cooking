const mongoose = require('mongoose');
const CateogriaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,

    }
});

module.exports= mongoose.model('Usucategoria',CateogriaSchema);