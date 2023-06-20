const path = require("path");
const { saveProduct, findById } = require("../data/products");
const products = require("../data/products");
const fs = require("fs");
const carritoFilePath = path.resolve("data/carrito.json");
const productosfilepath = path.resolve('data/productsDatos.json')

module.exports = {
  Home: (req,res)=> {
    return res.render ('index');
  },
  index: (req, res) => {
    return res.render('index');
  },
  login:(req, res) => {
    return res.render('users/admin/login');
  },
  nosotros:(req,res)=>{
    return res.render('users/nosotros'); 
  },
  donaciones:(req,res)=>{
    return res.render('users/donaciones');
    
  },
};


 

    