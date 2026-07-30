const boton = document.getElementById("boton-accesibilidad");
const panel = document.getElementById("panel-accesibilidad");

if (boton && panel) {
    boton.addEventListener("click", () => {
        panel.classList.toggle("oculto");
    });
}

function aumentarTexto() {
    document.body.style.fontSize = "1.1em";
}

function disminuirTexto() {
    document.body.style.fontSize = "0.95em";
}

function altoContraste() {
    document.body.classList.toggle("alto-contraste");
}

function escalaGrises() {
    document.body.classList.toggle("grises");
}

function restablecer() {
    document.body.style.fontSize = "";
    document.body.classList.remove("alto-contraste", "grises");
}