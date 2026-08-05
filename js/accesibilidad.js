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
    document.body.classList.add("texto-grande");
}

function disminuirTexto() {
    escalaTexto = Math.max(0.8, escalaTexto - 0.1);
    aplicarEscalaTexto();
    document.body.classList.remove("texto-grande");
}



function altoContraste() {
    document.body.classList.toggle("alto-contraste");
}

function escalaGrises() {
    document.body.classList.toggle("escala-grises");
}

function espaciadoLetras(){

    document.body.classList.toggle(
        "espaciado-letras"
    );

}


function interlineado(){

    document.body.classList.toggle(
        "mayor-interlineado"
    );

}

function restablecer() {
    escalaTexto = 1;
    aplicarEscalaTexto();

    document.body.classList.remove("alto-contraste");
    document.body.classList.remove("escala-grises");
}

function reducirMovimiento(){

    document.body.classList.toggle(
        "reducir-movimiento"
    );

}