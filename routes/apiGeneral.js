var express = require('express');
var apirouter = express.Router();


function apiGeneral(db){
  var sesion="";
  var usuario = db.collection("usuario");
  var producto = db.collection("producto");




  apirouter.post("/obtenerUsuario",
          function(req, res){
             //res.status(500).json({"error":"Función no Implementada"});
             //var query = {$and:[{"Usuario": req.params.Usuario},{"Clave":req.params.Clave}]};
             console.log(req.body.user);
             usuario.findOne({$and:[{"Usuario": req.body.user},{"Clave":req.body.passw}]}, function(err, doc){
                if(doc==null){
                  res.redirect("../mindex");
                  //  res.status(500).json({"error":err});
                }else{
                  req.session.usuarioId=doc._id;
                  req.session.usuarioNombre=doc.Usuario;
                  res.redirect("../mindex#menu");

                    //res.status(200).json({"usuario":doc});
                }
            });

          }
      ) // obtenerUsuario






  apirouter.get("/obtenerProductos",
        function(req, res){
          //  var query = {{"ProdId":1},{"producto":1,"_id":0}};
          //"Descripcion":1,
            producto.find({},{"Descripcion":1,"_id":0,"items":1}).toArray(function(err, producto){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"producto":producto});
                }
            }) // libros.find toarray
        }
    ) // obtenerProductos



  //  db.usuario.update({"Usuario":"hbs"},{$push:{"":91}})




    apirouter.post("/insertarCarrito/:des",
        function(req, res){
          console.log(req.session.usuarioId);
          console.log(req.params.des);
            var query = {"_id": req.session.usuarioId};
            var upd = {"$push":{"Carrito":req.params.des}};

            usuario.updateOne(query,upd,{w:1},function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"Usuario":doc});
                }
            });
        }
    ) // insertarCarrito



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
  })//registroUsuario



  return apirouter;
}//apiUsuario
module.exports = apiGeneral;
