
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

//expresion regular para verificar mail
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const nameInput = document.querySelector('input[type="text"]');
  const name = nameInput.value;
  const phoneInput = document.querySelector('input[type="number"]');
  const phone = phoneInput.value;
 

  if (!name || !email || !phone || !comentario) {
    alert('Por favor complete todos los campos del formulario.');
  } else if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
    form.reset();
  }
}