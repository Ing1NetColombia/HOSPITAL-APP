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
});

function cerrarSesion(){
    if(confirm("Desea cerrar sesión?")){
        localStorage.removeItem("usuario");
        window.location.href = "../index.html";
    }
}