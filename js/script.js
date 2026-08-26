// 1. Agarramos el formulario buscándolo por su id
const form = document.getElementById('formTurno');

// 2. Agarramos el mensaje de confirmación, todavía escondido
const mensajeEnvio = document.getElementById('mensajeEnvio');

// 3. "Escuchamos" el momento en que se envía el formulario
form.addEventListener('submit', function(evento) {
  // Frenamos el comportamiento por defecto (que recargaría la página)
  evento.preventDefault();

  // Le agregamos la clase "visible" al mensaje, para que el CSS lo muestre
  mensajeEnvio.classList.add('visible');

  // Vaciamos los campos del formulario
  form.reset();
});