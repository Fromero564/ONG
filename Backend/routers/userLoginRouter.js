const express = require ('express');
const router = express.Router();
const {check, validationResult, body} = require('express-validator');
const mainController = require("../controllers/mainController.js");
const userController= require("../controllers/userController");

let validateRegister = [
    check('usuarioLogin').notEmpty().withMessage('Debes completar este campo'),
    check('passwordLogin').notEmpty().withMessage('Debes completar este campo')
]

//Login usuarios
router.get("/login",mainController.login);
router.post("/login",validateRegister,userController.login);


module.exports = router;