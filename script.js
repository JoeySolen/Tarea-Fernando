// Función para alternar la apertura y cierre del menú lateral
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('closed');
}

//Función para el despliegue del menú acordeón de los tipos de suelo

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
        this.classList.toggle('active');
        const accordionContent = this.nextElementSibling;
    
        if (accordionContent.style.display === 'block') {
            accordionContent.style.display = 'none';
        } else {
            accordionContent.style.display = 'block';
        }
        });
    });
    });

document.addEventListener("DOMContentLoaded", function() {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    
    sendButton.addEventListener("click", sendMessage);
    
    userInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
        sendMessage();
        }
    });
    
    function sendMessage() {
        const userMessage = userInput.value;
        userInput.value = "";
    
        addMessage("user", userMessage);
        sendMessageToGPT(userMessage);
    }
    
    function sendMessageToGPT(message) {
        // Aquí se envía la solicitud para obtener la respuesta
        // Por simplicidad, aquí simplemente se puso un mensaje de ejemplo del modelo
    
        // Respuesta de ejemplo
        const gptResponse = "¡Hola!, ¿En qué puedo ayudarte?";
    
        // Se simula un retraso de respuesta
        setTimeout(function() {
        addMessage("gpt", gptResponse);
        }, 500);
    }
    
    function addMessage(sender, message) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message-container");
        messageContainer.classList.add(sender);
    
        const messageText = document.createElement("p");
        messageText.innerText = message;

        messageContainer.appendChild(messageText);
    chatLog.appendChild(messageContainer);
    chatLog.scrollTop = chatLog.scrollHeight;
}
});

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

//Preguntas

document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener las respuestas seleccionadas
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');
    var q6 = document.querySelector('input[name="q6"]:checked');
    var q7 = document.querySelector('input[name="q7"]:checked');
    var q8 = document.querySelector('input[name="q8"]:checked');
    var q9 = document.querySelector('input[name="q9"]:checked');
    var q10 = document.querySelector('input[name="q10"]:checked');
    var q11 = document.querySelector('input[name="q11"]:checked');
    var q12 = document.querySelector('input[name="q12"]:checked');
    var q13 = document.querySelector('input[name="q13"]:checked');
    var q14 = document.querySelector('input[name="q14"]:checked');
    var q15 = document.querySelector('input[name="q15"]:checked');
    
    // Verificar si todas las preguntas han sido respondidas
    if (q1 === null || q2 === null || q3 === null || q4 === null || q5 === null || q6 === null || q7 === null || q8 === null || q9 === null || q10 === null || q11 === null || q12 === null || q13 === null || q14 === null || q15 === null) {
        alert('Por favor, responde todas las preguntas.');
        return;
    }
    
    // Calcular la calificación promedio
    var score = (parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value) + parseInt(q4.value) + parseInt(q5.value)) / 5;
    
    // Mostrar el resultado
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Tu calificación es: ' + score.toFixed(2) + ' estrellas.';
});