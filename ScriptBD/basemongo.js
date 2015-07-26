
use MUMDB
var datos={"UserId":1,"Nombre":"Nicolle","Apellido":"Gonzalez","Correo":"gnicolle93@gmail.com","Usuario":"gnicolle","Clave":"gonzalez",
"Carrito":[{"ProdId":1,"Mesas":"Mesas Redondas Plásticas
Desarmables","Precio":200,"Cantidad":20,"Img":"mesaredonda.png"},{"ProdId":4,"Pasteles De Fondat":"Pastel De
Vainilla 3 Pisos","Precio":2000,"Cantidad":1,"Img":"pastelvainilla.png"}]}
db.usuario.insert(datos)
var datos={"UserId":2,"Nombre":"Marcony","Apellido":"Meza","Correo":"marconymeza@gmail.com","Usuario":"mmeza","Clave":"marcony"
,"Carrito":[{"ProdId":1,"Mesas":"Mesas Rectángulares","Precio":200,"Cantidad":10,"Img":"mesacuadrada.png"},{"ProdId":3,"Manteles":"Manteles Rectángulares","Precio":80,"Cantidad":10,"Img":"mantelcuadrado.png"}
             ,{"Prod":4,"Pasteles De Fondat":"Pastel De Chocolate 3 Pisos","Precio":2500,"Cantidad":1,"Img":"pastelchocolate.png"},{"ProdId":5,"Tarjetas De Invitación":"Tarjeta Para Quince Años","Precio":75,"Cantidad":50,"Img":"tarjeta15.png"}]}
db.usuario.insert(datos)
var datos={"UserId":3,"Nombre":"Wilmer","Apellido":"Lainez","Correo":"sirmimex@gmail.com","Usuario":"sirmimex","Clave":"hola"
,"Carrito":[{"ProdId":6,"Ramos De Novia":"Ramo En Cascada","Precio":1000,"Cantidad":2,"Img":"ramocascada.png"}]}
db.usuario.insert(datos)
var datos={"UserId":4,"Nombre":"Brigith","Apellido":"Zaldivar","Correo":"brillito09@gmail.com","Usuario":"brillito","Clave":"brillito09"
,"Carrito":[{"ProdId":8,"Decoraciones":"Decoración De Salones","Precio":3000,"Cantidad":1,"Img":"decoracionsalon.png"}]}
db.usuario.insert(datos)


var prod={"ProdId":1,"Descripcion":"Mesas","items":[{"Descrip":"Mesas Redondas","Precio":200,"Img":"mesaredonda.png"},{"Descrip":"Mesas Rectángulares","Precio":200,"Img":"mesacuadrada.png"}]
            }
db.producto.insert(prod)
var prod={"ProdId":2,"Descripcion":"Sillas","items":[{"Descrip":"Sillas De Metal","Precio":100,"Img":"sillasmetal.png"},{"Descrip":"Sillas Plásticas","precio":100,"Img":"sillaplastica.png"}]
          }
db.producto.insert(prod)
var prod={"ProdId":3,"Descripcion":"Manteles","items":[{"Descrip":"Manteles Redondos","Precio":50,"Img":"mantelredondo.png"},{"Descrip":"Manteles Rectángulares","Precio":80,"Img":"mantelcuadrado.png"}]
          }
db.producto.insert(prod)
var prod= {"ProdId":4,"Descripcion":"Pasteles De Fondat","items":[{"Descrip":"Pastel De Vainilla 3 Pisos","Precio":2000,"Img":"pastelvainilla.png"},{"Descrip":"Pastel de Chocolate 3 Pisos","Precio":2500,"Img":"pastelchocolate.png"}]
        }
db.producto.insert(prod)
var prod=  {"ProdId":5,"Descripcion":"Tarjetas De Invitación","items":[{"Descrip":"Tarjetas Para Boda","Precio":100,"Img":"tarjetaboda.png"},{"Descrip":"Tarjeta Para Quince Años","Precio":75,"Img":"tarjeta15.png"},
        {"Descrip":"Tarjeta Para Bautizo","Precio":50,"Img":"tarjetabautizo.png"}]}
db.producto.insert(prod)
var prod={"ProdId":6,"Descripcion":"Ramos De Novia","items":[{"Descrip":"Ramo En Cascada","Precio":1000,"Img":"ramocascada.png"},{"Descrip":"Ramo En Domo","Precio":1400,"Img":"ramodomo.png"},{"Descrip":"Ramo Redondo","Precio":1200,"Img":"ramoredondo.png"}
               ,{"Descrip":"Ramo De Presentacion","Precio":1600,"Img":"ramopresentacion.png"}]}
db.producto.insert(prod)
var prod={"ProdId":7,"Descripcion":"Accesorios Para Boda","items":[{"Descrip":"Copas","Precio":25,"Img":"copas.png"},{"Descrip":"Cofre","Precio":1000,"Img":"cofre.png"},{"Descrip":"Libro De Firmas","Precio":1000,"Img":"librofirmas.png"}
              ,{"Descrip":"Cojín Para Anillos","Precio":1000,"Img":"cojinanillos.png"}]}
db.producto.insert(prod)
var prod={"ProdId":8,"Descripcion":"Decoraciones","items":[{"Descrip":"Decoración De Iglesias","Precio":2500,"Img":"decoracioniglesia.png"},{"Descrip":"Decoración De Salones","Precio":3000,"Img":"decoracionsalon.png"}
               ,{"Descrip":"Decorción Fiesta Infantil","Precio":2000,"Img":"fiestainfantil.png"}]}
db.producto.insert(prod)
