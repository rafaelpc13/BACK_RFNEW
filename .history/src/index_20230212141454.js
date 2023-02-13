const express = require('express')

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('hello word!')
});

app.listen(PORT,()=>{
    console.log(`Servidor corriendo desde el ${PORT}`)
})