const express = require ('express');
const router = express.Router();
const {check, validationResult, body} = require('express-validator');
const userController = require("../controllers/userController");




//Registro Usuarios
router.get("/registro",userController.registro);
router.post("/registro",userController.registroUsuario);

module.exports = router;