
const express =require("express")


const {obtenerNumeros,
    actualizarNumero,agregarNumeros,cambiarestado,obtenerUsuarioGanador} = require ("../controllers/tareacontroller.js");

const router = express.Router();



router
.route('/numero')
.post(agregarNumeros)
.get(obtenerNumeros)

router.put('/numero/:id',actualizarNumero)
router.put('/numero/estado/:id',cambiarestado)
router.post('/numero/ganador/:num',obtenerUsuarioGanador)

module.exports= router;

