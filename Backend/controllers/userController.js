const path = require ('path');
const {validationResult} = require('express-validator');
const { saveProduct, findById } = require('../data/user');
const users = require('../data/user');
const fs = require('fs');
const userFilePath = path.resolve('data/users.json');
const db=require ('../src/database/models');
const sequelize=db.sequelize;
const axios = require('axios');
const bcrypt = require('bcryptjs');
const bodyParse = require('body-parser');


module.exports = {
    
    //User Login
    login: async (req,res) =>{
      
      let userEmail = req.body.usuarioLogin;
      let userPassword = req.body.passwordLogin;
      let userConfirm = await db.User.findOne({where:{email:userEmail}})
      let passwordHashLogin = userConfirm.password;
      let errors = validationResult(req) ;
      if(userConfirm && bcrypt.compareSync(userPassword, passwordHashLogin)){
        
        session=req.session;
        session.userid= userEmail;
        session.password = userPassword;
        res.render('index');
    }
    else{
      errors = errors.array();
      res.render('users/admin/login',{errors})
    }
      
    
    },
    registro:(req,res)=>{
      axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      const countries = response.data;
      countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      res.render('users/registro', { countries });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Error al obtener los países'});
    });

     
    },
    
    registroUsuario:(req,res)=>{
      const user = {
        id: Date.now(),
        usuario: req.body.nameRegister,
        email: req.body.emailRegister,
        password: req.body.passwordRegister,
        direccion: req.body.direccionRegister,
        pais: req.body.paisRegister,
        telefono: req.body.telefonoRegister,
        tipo: req.body.tipoRegistro,
    };
    
    let userFileContent = fs.readFileSync(userFilePath, "utf-8");
    let userFile = JSON.parse(userFileContent);
    let userEmailCompare = user.email;
    let userEmailExist = userFile.find( (user) => user.email == userEmailCompare);
    if(userEmailExist){
      res.send('Este usuario ya existe')
    }else{
      userFile.push(user);
      userFileContent = JSON.stringify(userFile, null, 4);
      fs.writeFileSync(userFilePath, userFileContent, "utf-8");
      return res.redirect("/tienda");
    }
  },

};