const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const bcrypt = require('bcryptjs');
const axios = require('axios');


const Users = db.User;
const Rols = db.Rol;

const usersAPIController = {
    user: (req, res) => {
        Users.findAll({
            include: [{
                model: Rols,
                as: 'rol',
                attributes: ['id', 'rol']
              }]
        })
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                },
                data: users
            }
                res.json(respuesta);
            })
    },
    userId: async (req,res)=>{
            let id = req.params.id;
            const usuarioId = await Users.findByPk(id);
             res.json(usuarioId);
    },
    create: async (req,res) => {
      let mensaje = "Este correo ya se encuentra registrado"
    
     try{
      const comprobarUsuario = await Users.findOne({
        where:{
            email: req.body.emailRegister,
        }
      })
       
       if(comprobarUsuario){
        axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
          const countries = response.data;
          countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
          res.render("users/registro",{mensaje,countries})
        })
        
       }else{
       await Users.create(
            {
               nombre: req.body.nameRegister,
               email: req.body.emailRegister,
               //password: req.body.passwordRegister,
               password: bcrypt.hashSync(req.body.passwordRegister, 10),
               direccion: req.body.direccionRegister,
               pais: req.body.paisRegister,
               telefono: req.body.telefonoRegister,
               tipo: req.body.tipoRegistro,
               rol_id: req.body.tipoRegistro
            
            }
        )
        res.redirect('/user/login')
        }
      
    } catch (error) {
        console.error(error);
        res.send(error);
      }
    },
    logout:(req,res,next)=>{
        if (req.session) {
            req.session.destroy(function (err) {
              if (err) {
                return next(err);
              } else {
                return res.redirect('/');
              }
            });
          }
     },
 }




module.exports =  usersAPIController;