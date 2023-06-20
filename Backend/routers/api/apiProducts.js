const express = require('express');
const router = express.Router();
const productosApiController = require('../../controllers/api/productsAPIController')

router.get("/productos",productosApiController.productApi);





module.exports=router;
