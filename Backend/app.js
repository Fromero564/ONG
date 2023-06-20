const express = require ('express');
const bodyParser = require('body-parser')
const app = express ();
const path = require ('path');
const methodOverride = require("method-override");
const router = require('./routers/mainRouter.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require("cors");


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// Parse application/json
app.use(bodyParser.json())
app.use(methodOverride("_method")); 

//Para utilizar cors
app.use(cors());

app.use(cookieParser());
/*Trabajar con session*/
// Session que dura 24hs
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret:'Ayuda a los animales ',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },

}))

//Middleware global para utilizar el id de session en todo el servidor
app.use((req, res, next) => {
    res.locals.userid = req.session.userid;
    next();
  });
//Middleware global de cantidad de productos
app.use((req, res, next) => {
  res.locals.productosAgregadosTotal = req.session.productosAgregadosTotal || 0;
  next();
});
/*Carpeta public*/
app.use(express.static(path.join(__dirname,'public')));

var PORT = 3026;

app.listen(PORT,() => {

console.log(`Se prendio el servidor en ${PORT}`);

});

/*EJS ENGINE*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*Vistas renderizadas*/
app.use('/', router);



 app.use((req,res,next)=>{
 res.status(404).render('notFound')
 })