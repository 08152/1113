const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const messages = document.getElementById("messages");

function addMessage(text, type) {
    const message = document.createElement("div");

    message.className = `message ${type}`;
    message.textContent = text;

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    // Vorläufige Antwort.
    // Später kommt hier unser neuronales Netzwerk hin.
    setTimeout(() => {
        addMessage("Ich lerne noch. 🧠", "ai");
    }, 300);
});
