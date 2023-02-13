const mongoose =require ("mongoose");

const conectarDB = async ()=>{
    try{
        const MONGO_URI=`mongodb+srv://rafael:25698710@cluster0.n45eq.mongodb.net/Rifas?retryWrites=true&w=majority`
const connection = await mongoose.connect(MONGO_URI,
{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const url = `${connection.connection.host}:${connection.connection.port}`;
console.log(`MonogoDB conectado en : ${url}`)
    }catch(error){
        console.log('error:${error.message}');
        process.exit(1);
    }
    
};

module.exports= mongoose;