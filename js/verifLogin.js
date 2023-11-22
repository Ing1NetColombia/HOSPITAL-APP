window.addEventListener("load", function(){
    let usuarioLog = JSON.parse(localStorage.getItem("usuario"));
    if(usuarioLog == null){
        window.location.href = "../index.html";
    }else{
        //x = window.history.go(-1);
    }
});

function cerrarSesion(){
    localStorage.removeItem("usuario");
    window.location.href = "../index.html";
}