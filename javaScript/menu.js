document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
});