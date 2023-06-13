document.getElementById("cantidad").addEventListener("input", function() {
    var cantidad = this.value;
    var precioUnitario = 1500;
    var precioTotal = cantidad * precioUnitario;
    document.getElementById("precio-preview").textContent = "Precio total: $" + precioTotal;
  });

  const fechaInput = document.getElementById('fecha');

 
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var cantidad = document.getElementById("cantidad").value;
    var tarjeta = document.getElementById("tarjeta").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var fecha = document.getElementById("fecha").value;
  
    if (cantidad && tarjeta && nombre && apellido && dni && email && fecha) {
      var confirmacion = confirm("¿Está seguro de realizar la compra? Los tickets serán enviados a su correo electrónico. En caso de cualquier inconveniente, por favor, comuníquese con nuestro soporte.");
    
      if (confirmacion) {
        alert("¡Compra realizada con éxito! Los tickets serán enviados a su correo electrónico.");
        document.getElementById("myForm").reset();
      } else {
        alert("Compra cancelada.");
      }
    } else {
      if (!fecha) {
        alert("Por favor, elija una fecha de partida.");
      } else {
        alert("Por favor, complete todos los campos requeridos.");
      }
    }
  });