var express = require('express');
var apirouter = express.Router();

function apiProducto(db){

  var producto = db.collection("producto");
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
    ) // obtenerLibros
    return apirouter;
}
module.exports = apiProducto;
