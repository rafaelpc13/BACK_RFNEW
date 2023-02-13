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



const servidor = app.listen(PORT, () => {
    console.log(`servidor corriendo desde el puerto ${PORT}`);
})


//conexiones desde socket

const { Server, Socket } =require ('socket.io')

const io = new Server(servidor, {
    pingTimeout: 60000,
    cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true
    },
});


const cron = require('node-cron');


let eventEmitted = false;

io.on('connection', (socket) => {
    console.log("conectado a socket.io")

    if(!eventEmitted){
        eventEmitted = true;
        function myFunction() {
            console.log('Ejecutando la función a las 7:00 PM');
            socket.emit('eventName');
        }
    cron.schedule('22 11 * * *', myFunction);

    }
   
    
    //definiri eventos
    socket.on('abrir ventana', (proyecto) => {
        socket.join(proyecto)
        //  socket.to("63be0eb2427b49225f017135").emit('respuesta',{nombre:'rafael'})

    });

    socket.on('actualizar', (tarea) => {
        const proyecto = tarea.precio
        socket.to(proyecto).emit('agregada', tarea)
    });

    socket.on('cambiar', (tarea) => {
        console.log(tarea)
        const proyecto = tarea.precio
        socket.to(proyecto).emit('nuevo estado', tarea)
    })
})
module.export= { servidor };
