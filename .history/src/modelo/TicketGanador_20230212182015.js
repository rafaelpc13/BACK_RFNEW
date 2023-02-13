const mongoose = require ("mongoose");

const ticketsSchema = mongoose.Schema
    ({
        numero: {
            type: String,
            required: true,
            trim: true
        },  
        usuarioGanador: {
            type: String,
            required: true,
            trim: true
        }, 
        precio:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Precio",
        }

    },{timestamps:true,});

    const Ticket = mongoose.model("Ticket", ticketsSchema);
module.exports= Ticket;

