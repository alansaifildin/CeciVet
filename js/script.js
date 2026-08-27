// ===========================================================
// FORMULARIO (solo existe en index.html, por eso chequeamos "if (form)")
// ===========================================================
const form = document.getElementById('formTurno');
const mensajeEnvio = document.getElementById('mensajeEnvio');

if (form) {
  form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const mascota = document.getElementById('mascota').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;

    const texto = `¡Hola CeciVet! 🐾\n\nSoy ${nombre}.\nMi mascota: ${mascota}\nServicio: ${servicio}\nDetalle: ${mensaje}`;
    const textoCodificado = encodeURIComponent(texto);
    const linkWhatsApp = `https://wa.me/595971111958?text=${textoCodificado}`;

    mensajeEnvio.classList.add('visible');
    window.open(linkWhatsApp, '_blank');
    form.reset();
  });
}

// ===========================================================
// ANIMACIÓN AL SCROLL (funciona en cualquier página)
// ===========================================================
const elementosAnimar = document.querySelectorAll('.aparecer');

const observador = new IntersectionObserver(function(elementos) {
  elementos.forEach(function(el) {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observador.unobserve(el.target);
    }
  });
}, { threshold: 0.15 });

elementosAnimar.forEach(function(el) {
  observador.observe(el);
});
// ===========================================================
// LIGHTBOX: abre la foto en grande al hacer clic
// ===========================================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCerrar = document.getElementById('lightboxCerrar');
const fotosGaleria = document.querySelectorAll('.foto-item img');

fotosGaleria.forEach(function(foto) {
  foto.addEventListener('click', function() {
    lightboxImg.src = foto.src;
    lightboxImg.alt = foto.alt;
    lightbox.classList.add('visible');
  });
});

function cerrarLightbox() {
  lightbox.classList.remove('visible');
}

lightboxCerrar.addEventListener('click', cerrarLightbox);

// Cerrar también si tocás el fondo oscuro (fuera de la foto)
lightbox.addEventListener('click', function(evento) {
  if (evento.target === lightbox) {
    cerrarLightbox();
  }
});

// Cerrar con la tecla Escape del teclado
document.addEventListener('keydown', function(evento) {
  if (evento.key === 'Escape') {
    cerrarLightbox();
  }
});