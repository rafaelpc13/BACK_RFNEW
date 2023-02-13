const express = require('express')
const V1Router=require("./routes/index")
const precioRouters=require("./routes/precioRoutes")
const tareaRouters=require("./routes/tareaRoutes")
const productsRouters=require("./routes/products.routes")
const ticketRouters=require("./routes/ticketRoutes")

const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 4000;
require('dotenv').config({ path:  `${__dirname}/../.env` });


const {mongoose}=require('./database/connection')
app.use(cors());

app.use(tareaRouters)
app.use(precioRouters)
app.use(productsRouters)
app.use(ticketRouters)

app.use("/api",V1Router)

app.listen(PORT,()=>{
    console.log(`Servidor corriendo desde el ${PORT}`)
})