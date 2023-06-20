const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");
const moment = require('moment');
const { update } = require('../productsController');
const req = require('express/lib/request');



const Producto = db.Producto;
const Categoria = db.Categoria;
const ProductosCarrito = db.Productocarrito;
const User = db.User;

const carritoAPIController = {
    vistaCarrito: async (req,res)=>{
        let usuarioSession = session.userid;
        let usuarioLogin = await User.findOne({
            where:{
                email: usuarioSession,
            }
        });
         let productosAgregados= await ProductosCarrito.findAll({
            where:{
            user_id: usuarioLogin.id,
            },
            include: {
              model: Producto,
              attributes: ['id', 'nombre', 'precio']
            }
            })
         let productosAgregadosTotal = productosAgregados.length;
         req.session.productosAgregadosTotal = productosAgregadosTotal;
         
        res.render('users/carrito',{productosAgregados});
       },
    agregarCarrito:async(req,res)=>{
        let usuarioSession = session.userid;
        let product_id = req.params.id;
        let cantidad = req.body.cantidad;
        let user_id = await User.findOne({
            where:{
                email: usuarioSession,
            }
        });

        let productoYaAgregado= await ProductosCarrito.findOne({
            where:{
                user_id: user_id.id,
                productos_id:product_id,
            }

            
        })
        if(!productoYaAgregado){
        await ProductosCarrito
        .create(
            {
               cantidad: cantidad,
               productos_id: product_id,
               user_id: user_id.id,
            }
        )
        res.redirect("/carrito")
        }else{
            await ProductosCarrito.update({
                cantidad: Number(productoYaAgregado.cantidad) + Number(cantidad) ,
            }, 
            {where: 
            {
                user_id: user_id.id,
                productos_id:product_id,  
            }})
            .then(()=> {
            return res.redirect("/products/tienda")})
            .catch(error => res.send(error));
            
        }
    },
    eliminarProducto:async(req,res)=>{
        let usuarioSession = session.userid;
        let user_id = await User.findOne({
            where:{
                email: usuarioSession,
            }
        });
            ProductosCarrito.destroy({
            where:{
            productos_id: req.params.id,
            user_id:user_id.id,
            }
            })
             res.redirect("/carrito" )
    },
    modificarProducto:async(req,res)=>{
        let usuario = session.userid;
        let productoModificar= req.params.id;
        let cantidadModificada= req.body.cantidad;
        let userid = await User.findOne({
            where:{
                email: usuario,
            }
        });
        
        let productoEnCarrito= await ProductosCarrito.findOne({
            where:{
               user_id: userid.id,
               id: productoModificar,
            }
        })
        await productoEnCarrito.update({
              cantidad: cantidadModificada,
        })

        return res.redirect('/carrito')
    }

}

module.exports = carritoAPIController;