$(window).on("load", function () {
  let usuarioLog = JSON.parse(localStorage.getItem("usuario")) || {};
  if (Object.keys(usuarioLog).length == 0) {
    window.location.href = "../index.html";
  }
});

$(document).ready(function () {
  let offcanvas = $("#offcanvasNavbarLabel");
  if (offcanvas) {
    offcanvas.html(
      "Bienvenido " + JSON.parse(localStorage.getItem("usuario"))["usuario"]
    );
  }
  cargarPlantilla("inicio", "divHome");
});

function cerrarSesion() {
  if (confirm("Desea cerrar sesión?")) {
    localStorage.removeItem("usuario");
    window.location.href = "../index.html";
  }
}

function cargarPlantilla(plantilla, destino) {
  var url =
    window.location.protocol +
    "//" +
    window.location.host +
    "/pages/" +
    plantilla +
    ".html";
  fetch(url, {
    headers: {
      "Content-Type": "text/html",
    },
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (texto) {
      var contenedor = document.getElementById(destino);
      contenedor.innerHTML = "";
      contenedor.innerHTML = texto;
      ejecutarScriptsEnContenido(contenedor);
      //var scriptTag = document.getElementById("script" + plantilla);
      //var scriptHome = document.getElementById("homeScript");
      /*var body = document.getElementsByTagName("body");
      if (scriptTag) {
        body[0].insertBefore(scriptTag, null);
        scriptTag.src = scriptTag.src;
      }*/
    });
}

function ejecutarScriptsEnContenido(elemento) {
  if (!elemento) {
    return;
  }
  const scripts = elemento.querySelectorAll("script");
  scripts.forEach((script) => {
    const nuevoScript = document.createElement("script");
    nuevoScript.text = script.text;
    script.parentNode.replaceChild(nuevoScript, script);
  });
}
