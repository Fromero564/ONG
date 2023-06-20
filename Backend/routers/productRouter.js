const express = require ('express');
const path = require ('path');
const router = express.Router();
const productsControllers = require("../controllers/productsController");
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/images"),
    filename: (req, file, cb) => {
        cb(null, "image-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
});

var auth = function(req, res, next) {
    if (req.session && req.session.userid=== "admin")
      return next();
    else
      return res.send('Usted no se encuentra logeado');
  };



//router.get("/create",auth,productsControllers.create);
//router.get("/:id", productsControllers.detail);
//router.post("/create", upload.single("image"), productsControllers.store);
//router.get("/:id/edit",auth,productsControllers.edit);
router.put("/:id", productsControllers.update);
router.delete("/:id",auth,productsControllers.destroy);







module.exports = router;