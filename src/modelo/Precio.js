const mongoose = require ("mongoose");


const preciosSchema = mongoose.Schema
    ({
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        descripcion: {
            type: String,
            required: true,
            trim: true
        },      
        numeros:[{
            type: mongoose.Schema.Types.ObjectId,
           ref:"Numero",
        }],
        tickets:[{
            type: mongoose.Schema.Types.ObjectId,
           ref:"Ticket",
        }],
      
    },{timestamps:true,});

    const Precio = mongoose.model("Precio", preciosSchema);
module.exports= Precio;