// $( window ).on( "load", function() {
//     let usuarioLog = JSON.parse(localStorage.getItem("usuario"));
//     if(usuarioLog == null){
//         window.location.href = "../index.html";
//     }
// });
$(document).ready(function(){
    let offcanvas  = $("#offcanvasNavbarLabel");
    if(offcanvas){
        offcanvas.html("Bienvenido " + JSON.parse(localStorage.getItem("usuario"))["usuario"]);
    }
    cargarPlantilla("inicio","divHome");
});

function cerrarSesion(){
    if(confirm("Desea cerrar sesión?")){
        localStorage.removeItem("usuario");
        window.location.href = "../index.html";
    }
}

function cargarPlantilla(plantilla, destino){
    var url = window.location.protocol + "//" + window.location.host + "/pages/"+plantilla+".html";
    fetch(url,{headers: {
        "Content-Type": "text/html",
      }})
      .then(function(response) {
        return response.text()
      })
    .then(function(texto) {
        console.log(texto);
        var contenedor  = document.getElementById(destino);
        contenedor.innerHTML = "";
        contenedor.innerHTML = texto;
    });
}