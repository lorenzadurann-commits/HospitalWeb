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


function reducirMovimiento(){

    document.body.classList.toggle(
        "reducir-movimiento"
    );

}

function subrayarEnlaces() {
    document.body.classList.toggle("subrayar-enlaces");
}

function resaltarTitulos(){

document.body.classList.toggle("resaltar-titulos");

}

function cursorGrande(){

document.body.classList.toggle("cursor-grande");

}

function fuenteLegible(){

    document.body.classList.toggle("fuente-legible");

}

// ===== LECTOR DE PÁGINA =====

let lectura = new SpeechSynthesisUtterance();

function seleccionarVoz(){

    const voces = speechSynthesis.getVoices();

    const vozEspanol = voces.find(voz =>
        voz.lang.includes("es")
    );

    if(vozEspanol){
        lectura.voice = vozEspanol;
    }
}

function leerPagina(){

    let contenido = document.getElementById("contenido-lectura");

    if(!contenido){
        return;
    }

    seleccionarVoz();

    lectura.text = contenido.innerText;

    lectura.lang = "es-MX";
    lectura.rate = 1;
    lectura.volume = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(lectura);
}


function pausarLectura(){

    speechSynthesis.pause();

}


function continuarLectura(){

    speechSynthesis.resume();

}


function detenerLectura(){

    speechSynthesis.cancel();

}

function restablecer() {

    // Restablecer tamaño de texto
    escalaTexto = 1;
    aplicarEscalaTexto();

    // Quitar clases de accesibilidad
    document.body.classList.remove(
        "alto-contraste",
        "escala-grises",
        "espaciado-letras",
        "mayor-interlineado",
        "reducir-movimiento",
        "subrayar-enlaces",
        "resaltar-titulos",
        "cursor-grande",
        "fuente-legible"
    );

    // Detener lectura si está activa
    detenerLectura();
}