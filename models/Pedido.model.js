const mongoose = require('mongoose');
const PedidoSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,

    },
    fecha:{
        type:Date,
        default: Date.now
    }

});

module.exports= mongoose.model('Pedido',PedidoSchema);