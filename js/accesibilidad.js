const boton = document.getElementById("boton-accesibilidad");
const panel = document.getElementById("panel-accesibilidad");

let escala = 1;

boton.addEventListener("click", () => {
    panel.classList.toggle("oculto");
});

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

function subrayarEnlaces() {
    document.body.classList.toggle("subrayar-enlaces");
}

function fuenteLegible() {
    document.body.classList.toggle("fuente-legible");
}

function aumentarEspaciado() {
    document.body.classList.toggle("espaciado-amplio");
}

function cursorGrande() {
    document.body.classList.toggle("cursor-grande");
}

function ocultarImagenes() {
    document.body.classList.toggle("sin-imagenes");
}

function modoLectura() {
    document.body.classList.toggle("modo-lectura");
}

function restablecer() {
    escala = 1;
    aplicarEscala();

    document.body.className = document.body.className
        .split(" ")
        .filter(c => ![
            "alto-contraste",
            "grises",
            "subrayar-enlaces",
            "fuente-legible",
            "espaciado-amplio",
            "cursor-grande",
            "sin-imagenes",
            "modo-lectura"
        ].includes(c))
        .join(" ");
}