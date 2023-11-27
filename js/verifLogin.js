/*window.addEventListener("load", function(){
    let usuarioLog = JSON.parse(localStorage.getItem("usuario"));
    if(Object.keys(usuarioLog).length == 0){
        window.location.href = "../index.html";
    }else{
        window.location.href = "/pages/home.html";
    }
});*/

function cerrarSesion(){
    localStorage.removeItem("usuario");
    window.location.href = "../index.html";
}