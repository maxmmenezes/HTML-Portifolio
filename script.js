// script.js
document.addEventListener("DOMContentLoaded", function() {
    const alteracor = document.getElementById("alteracor");
    const alterah1 = document.getElementById("alterah1");

    alteracor.addEventListener("click", function() {
        const corescolhida = prompt("Digite uma cor (por exemplo, 'red', 'blue', '#FFFFF'):");
        
        // Verifica se o usuário inseriu uma cor
        if (corescolhida) {
            alterah1.style.color = corescolhida
        }
    });
});