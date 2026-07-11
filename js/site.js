// Utilidades compartidas del sitio: renderiza la navegación y el pie de página
// comunes en todas las páginas para evitar duplicar el mismo HTML en cada una.
(function () {
  "use strict";

  var NAV_LINKS = [
    { href: "index.html", texto: "INICIO" },
    { href: "rutas.html", texto: "RUTAS" },
    { href: "galeria.html", texto: "GALERÍA" },
    { href: "fauna.html", texto: "FAUNA Y FLORA" },
    { href: "clima.html", texto: "CLIMA" },
    { href: "consejos.html", texto: "SEGURIDAD" },
    { href: "faq.html", texto: "FAQ" }
  ];

  var FOOTER_LINEAS = [
    "Juan Francisco Fernández Pardo - Proyecto 1º ASIR 2026",
    "IES Cánovas del Castillo (Málaga)"
  ];

  function paginaActual() {
    var ruta = window.location.pathname;
    var archivo = ruta.substring(ruta.lastIndexOf("/") + 1);
    return archivo === "" ? "index.html" : archivo;
  }

  function renderNav(contenedor) {
    var activa = paginaActual();
    var ul = document.createElement("ul");
    NAV_LINKS.forEach(function (enlace) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = enlace.href;
      a.textContent = enlace.texto;
      if (enlace.href === activa) {
        a.className = "link-activo";
      }
      li.appendChild(a);
      ul.appendChild(li);
    });
    contenedor.innerHTML = "";
    contenedor.appendChild(ul);
  }

  function renderFooter(contenedor) {
    contenedor.innerHTML = "";
    FOOTER_LINEAS.forEach(function (linea) {
      var p = document.createElement("p");
      p.textContent = linea;
      contenedor.appendChild(p);
    });
  }

  function init() {
    var nav = document.querySelector("[data-site-nav]");
    if (nav) {
      renderNav(nav);
    }
    var footer = document.querySelector("[data-site-footer]");
    if (footer) {
      renderFooter(footer);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
