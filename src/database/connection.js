const mongoose = require ("mongoose");


const MONGO_URI=`mongodb+srv://rafael:25698710@cluster0.n45eq.mongodb.net/Rifas?retryWrites=true&w=majority`
 mongoose.connect(MONGO_URI)
 .then(db=>console.log("DB conectada"))
 .catch(err=>console.log(err))


module.exports= mongoose;