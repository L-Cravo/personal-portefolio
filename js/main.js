/* Portefólio de Mérito — Lourenço Cravo */
(function () {
  "use strict";

  /* ============================================================
     Router por hash — cada tipo de mérito é uma "tab" (vista).
     Rotas: #/ (início), #/academico, #/social, #/desportivo,
     #/cientifico, #/artistico, #/outros, #/contacto.
     Secções dentro de uma vista: #/enquadramento, #/sobre.
     Sem JS, todas as vistas ficam visíveis (degradação graciosa).
     ============================================================ */

  var VIEWS = ["inicio", "academico", "social", "desportivo", "cientifico", "artistico", "outros", "contacto"];
  var TITLES = {
    inicio: "Lourenço Cravo — Portefólio de Mérito",
    academico: "Mérito Académico — Lourenço Cravo",
    social: "Mérito Social — Lourenço Cravo",
    desportivo: "Mérito Desportivo — Lourenço Cravo",
    cientifico: "Mérito Científico · Tecnológico — Lourenço Cravo",
    artistico: "Mérito Artístico — Lourenço Cravo",
    outros: "Outros Méritos — Lourenço Cravo",
    contacto: "Contacto — Lourenço Cravo"
  };

  var views = Array.prototype.slice.call(document.querySelectorAll(".view"));
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-route]"));

  function parseHash() {
    var h = location.hash.replace(/^#\/?/, "").replace(/\/+$/, "");
    return h;
  }

  function show(route) {
    var viewId = VIEWS.indexOf(route) !== -1 ? route : "inicio";
    var scrollToId = viewId === "inicio" && route !== "inicio" ? route : null;

    views.forEach(function (v) {
      var active = v.getAttribute("data-view") === viewId;
      v.classList.toggle("view-hidden", !active);
    });

    tabs.forEach(function (a) {
      var active = a.getAttribute("data-route") === viewId;
      a.classList.toggle("active", active);
      if (active) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    document.title = TITLES[viewId] || TITLES.inicio;

    if (scrollToId) {
      var el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }

  function applyRoute() { show(parseHash()); }

  window.addEventListener("hashchange", applyRoute);
  applyRoute();

  /* ---------- Nav: sombra ao fazer scroll ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu móvel ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Reveal ao entrar no ecrã ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Lightbox para fotos ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");

  document.querySelectorAll(".photo-thumb img").forEach(function (img) {
    img.addEventListener("click", function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  /* ---------- Ano no rodapé ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
