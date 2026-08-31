// ===========================================================
// FORMULARIO (solo existe en index.html, por eso chequeamos "if (form)")
// ===========================================================
const form = document.getElementById('formTurno');
const mensajeEnvio = document.getElementById('mensajeEnvio');

if (form) {
  form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const datos = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: datos,
      headers: { 'Accept': 'application/json' }
    }).then(function(respuesta) {
      if (respuesta.ok) {
        mensajeEnvio.classList.add('visible');
        form.reset();
      } else {
        alert('Hubo un problema al enviar. Probá de nuevo o escribinos por WhatsApp.');
      }
    }).catch(function() {
      alert('Hubo un problema al enviar. Probá de nuevo o escribinos por WhatsApp.');
    });
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