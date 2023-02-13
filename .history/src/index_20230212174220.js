const express = require('express')
const V1Router=require("./routes/index")
import precioRouters from "./routes/precioRoutes"

const precioRouters=require("./routes/precioRoutes")
const app = express();

const PORT = process.env.PORT || 4000;


const {mongoose}=require('./database/connection')
app.use(precioRouters)
app.use("/api",V1Router)

app.listen(PORT,()=>{
    console.log(`Servidor corriendo desde el ${PORT}`)
})