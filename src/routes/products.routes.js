

const  { Router } =require("express")


const { getProducts,getProducts1} = require ("../controllers/products.controllers");



const router = Router()
router.post('/product/:i',getProducts1)
router.post('/products/:v/:n',getProducts)




module.exports=  router