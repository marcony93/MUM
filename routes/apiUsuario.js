var express = require('express');
var apirouter = express.Router();


function apiUsuario(db){
  var sesion="";
  var usuario = db.collection("usuario");
  apirouter.post("/registroUsuario",function(req,res){
    console.log(req.body);
    var nuevoUsuario={};
    nuevoUsuario.Nombre=req.body.txtnombre;
    nuevoUsuario.Apellido=req.body.txtapellido
    nuevoUsuario.Correo=req.body.txtcorreo
    nuevoUsuario.Usuario=req.body.txtusuario
    nuevoUsuario.Clave=req.body.txtPass;
    nuevoUsuario.Carrito=[]
    usuario.insertOne(nuevoUsuario,function(err,doc){
      if(err){
        res.status(500).json({"error":err});
        }
      else{
        res.redirect("../");
        //res.status(200).json({"usuario":doc});
        }
    })
  })//datos registro
  return apirouter;
}//apiUsuario
module.exports = apiUsuario;
