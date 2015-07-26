console.log("Javascript Loaded");
$("#perfil").on("pagecreate",function(e){
    var librosList = $("#librosList");
    $.ajax("api/obtenerProductos",
            {
                "method":"GET",
                "data":{},
                "dataType":"json",
                "success":function(jsonDoc,status,jqXHR){
                    console.log(jsonDoc);
                    var htmlstr = "";
                    for(var i = 0 ; i < jsonDoc.producto.length; i++){
                        htmlstr += '<li><a href>'+jsonDoc.producto[i].titulo+'</a><li>'
                    }
                    librosList.html(htmlstr).listview("refresh");

                },
                "error":function(jqXHR,status, errorMsg){
                    console.log(errorMsg);
                }

            }
        );
});
