window.addEventListener("load", function(){
    let usuarioLog = JSON.parse(localStorage.getItem("usuario"));
    if(usuarioLog == null){
        window.location.href = "../index.html";
    }else{
        window.history.go(-1);
    }
});