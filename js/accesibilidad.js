document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("boton-accesibilidad");
    const panel = document.getElementById("panel-accesibilidad");

    // Mostrar / ocultar panel
    boton.addEventListener("click", () => {
        panel.classList.toggle("oculto");
    });

});

// ===== FUNCIONES =====

function aumentarTexto() {
    document.body.style.fontSize = "110%";
}

function disminuirTexto() {
    document.body.style.fontSize = "90%";
}

function altoContraste() {
    document.body.classList.toggle("alto-contraste");
}

function escalaGrises() {
    document.body.classList.toggle("escala-grises");
}

function restablecer() {
    document.body.style.fontSize = "100%";
    document.body.classList.remove("alto-contraste");
    document.body.classList.remove("escala-grises");
}