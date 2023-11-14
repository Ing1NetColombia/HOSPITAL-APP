function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let contra = document.getElementById("contra").value;
    
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log(usuarios);
    var usuarioLog = usuarios.filter(function(usuarioF){
        return (usuarioF["usuario"] == usuario);
    });

    if(usuarioLog.length == 0){
        alert("Usuario no encontrado");
        return;
    }

    if(usuarioLog[0]["contra"] != contra){
        alert("Contraseña incorrecta");
        return;
    }

    alert("Bienvenido!");
}

function registroUsuario(){
    let usuario = document.getElementById("usuario").value;
    let contra = document.getElementById("contra").value;
    let documento = document.getElementById("docid").value;
    let nombre = document.getElementById("nombre").value;

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    //console.log(usuarios);
    var usuarioLog = usuarios.filter(function(usuarioF){
        return (usuarioF["usuario"] == usuario);
    });

    if(usuarioLog.length > 0){
        alert("Usuario ya existe");
        return;
    }
    let usuarioR = {docum: documento, nombre: nombre, usuario: usuario, contra : contra}
    usuarios.push(usuarioR);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Registro completo");
    document.getElementById("formRegistro").reset();
}