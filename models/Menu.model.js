const mongoose = require('mongoose');
const MenuSchema = mongoose.Schema({
    nombres:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,

    }

});

module.exports= mongoose.model('Menu',MenuSchema);