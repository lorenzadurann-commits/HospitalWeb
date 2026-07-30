const boton = document.getElementById("boton-accesibilidad");
const panel = document.getElementById("panel-accesibilidad");

let escala = 1;

if (boton && panel) {
    boton.addEventListener("click", () => {
        panel.classList.toggle("oculto");
    });
}

function aplicarEscala() {
    document.documentElement.style.fontSize = `${escala * 100}%`;
}

function aumentarTexto() {
    escala += 0.1;
    aplicarEscala();
}

function disminuirTexto() {
    escala = Math.max(0.8, escala - 0.1);
    aplicarEscala();
}

function altoContraste() {
    document.body.classList.toggle("alto-contraste");
}

function escalaGrises() {
    document.body.classList.toggle("grises");
}

function restablecer() {
    escala = 1;
    aplicarEscala();
    document.body.classList.remove("alto-contraste", "grises");
}