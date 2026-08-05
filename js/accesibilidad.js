document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("boton-accesibilidad");
    const panel = document.getElementById("panel-accesibilidad");

    // Mostrar / ocultar panel
    boton.addEventListener("click", () => {
        panel.classList.toggle("oculto");
    });

});

// ===== FUNCIONES =====

let escalaTexto = 1;

function aplicarEscalaTexto() {
    document.documentElement.style.setProperty(
        "--escala-texto",
        escalaTexto
    );
}

function aumentarTexto() {
    escalaTexto += 0.1;
    aplicarEscalaTexto();
}

function disminuirTexto() {
    escalaTexto = Math.max(0.8, escalaTexto - 0.1);
    aplicarEscalaTexto();
}

function restablecer() {
    escalaTexto = 1;
    aplicarEscalaTexto();

    document.body.classList.remove("alto-contraste");
    document.body.classList.remove("escala-grises");
}

function altoContraste() {
    document.body.classList.toggle("alto-contraste");
}

function escalaGrises() {
    document.body.classList.toggle("escala-grises");
}

function restablecer() {
    document.body.classList.remove("alto-contraste");
    document.body.classList.remove("escala-grises");
}