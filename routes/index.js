var express = require('express');
var router = express.Router();
/* GET home page. */
var pa = 0;
router.get('/', function(req, res, next) {
  console.log(req.valor);
  if(pa == 0 ){
    res.render('index', { Bienvenida:'',Iniciarsesion:'Iniciar sesion /',Registro:'Registrate'});
  }
  else {
    res.render('index', { Bienvenida:'Bienvenido', Iniciarsesion:'',Registro:''});
  }
});
module.exports = router;
