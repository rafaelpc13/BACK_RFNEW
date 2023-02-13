
const express =require("express")


const {obtenerTicket,
    actualizarNumero,insertarTicket} = require  ("../controllers/ticketcontroller");

const router = express.Router();


router
.route('/ticket')
.post(insertarTicket)
.get(obtenerTicket)

router.put('/numero/:id',actualizarNumero)



module.exports=  router;