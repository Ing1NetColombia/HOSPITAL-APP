$(window).on("load", function () {
  let usuarioLog = JSON.parse(localStorage.getItem("usuario")) || {};
  if (Object.keys(usuarioLog).length > 0) {
    window.location.href = "/pages/home.html";
  }
});

function iniciarSesion() {
  let usuario = document.getElementById("usuario").value;
  let contra = document.getElementById("contra").value;

  var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  var usuarioLog = usuarios.filter(function (usuarioF) {
    return usuarioF["usuario"] == usuario;
  });

  if (usuario == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor ingrese un usuario!",
    });
    return;
  }

  if (usuarioLog.length == 0) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "El usuario ingresado no existe.",
    });
    return;
  }

  if (usuarioLog[0]["contra"] != contra) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La contraseña ingresada no es correcta.",
    });
    return;
  }

  localStorage.setItem("usuario", JSON.stringify(usuarioLog[0]));
  window.location.href = "../pages/home.html";
}

function registroUsuario() {
  let usuario = document.getElementById("usuario").value;
  let contra = document.getElementById("contra").value;
  let contra2 = document.getElementById("contra2").value;
  let documento = document.getElementById("docid").value;
  let nombre = document.getElementById("nombre").value;

  if (contra2 !== contra) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Las contraseñas ingresadas no son iguales!",
    });
    return;
  }

  var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (usuarios !== null) {
    console.log(usuarios);
    var usuarioLog = usuarios.filter(function (usuarioF) {
      return usuarioF["usuario"] == usuario;
    });

    if (usuarioLog.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El usuario ingresado ya existe!",
      });
      return;
    }
  }
  let usuarioR = {
    docum: documento,
    nombre: nombre,
    usuario: usuario,
    contra: contra,
  };
  usuarios.push(usuarioR);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  Swal.fire({
    icon: "success",
    title: "Completo.",
    text: "El usuario se ha registrado correctamente!",
  });
  document.getElementById("formRegistro").reset();
}
