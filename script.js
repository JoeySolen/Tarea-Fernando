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