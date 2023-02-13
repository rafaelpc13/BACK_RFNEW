const express = require('express')
const V1Router=require("./routes/index")
const app = express();

const PORT = process.env.PORT || 4000;

app.use("/api",V1Router)

app.listen(PORT,()=>{
    console.log(`Servidor corriendo desde el ${PORT}`)
})