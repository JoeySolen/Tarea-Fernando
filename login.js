//Login

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    // Obtiene los valores ingresados por el usuario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Comprueba las credenciales de inicio de sesión
    if (username === "usuario" && password === "contraseña") {
      // Redirecciona a la página deseada
        window.location.href = "./preguntas.html";
        alert("Bienvenido "+username);
    } else {
    alert("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }
});

var myVariable = "¡Hola, mundo!"; // Contenido de la variable

var myDiv = document.getElementById('myDiv');
myDiv.innerHTML = myVariable; // Mostrar el contenido de la variable en el div
