const express = require('express');
const router = express.Router();
const path = require('path');
const carritoAPIController = require('../../controllers/api/carritoAPIController');

var auth = function(req, res, next) {
    if (req.session.userid)
      return next();
    else
      res.redirect('/user/login');
  };

router.get("/carrito",auth,carritoAPIController.vistaCarrito);
router.post("/carrito/:id",auth,carritoAPIController.agregarCarrito);
router.put("/carrito/:id", carritoAPIController.modificarProducto);
router.delete("/:id",carritoAPIController.eliminarProducto);

module.exports = router;