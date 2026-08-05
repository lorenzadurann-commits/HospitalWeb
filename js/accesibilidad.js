const boton = document.getElementById("boton-accesibilidad");
const panel = document.getElementById("panel-accesibilidad");

let escalaActual = parseFloat(localStorage.getItem("escalaTexto")) || 1;

/* ===== Mostrar / ocultar panel ===== */

boton.addEventListener("click", () => {
    panel.classList.toggle("oculto");
});

document.addEventListener("click", (e) => {
    if (!panel.contains(e.target) && !boton.contains(e.target)) {
        panel.classList.add("oculto");
    }
});

/* ===== Tamaño de texto ===== */

function aplicarEscala() {
    document.documentElement.style.fontSize = `${escalaActual * 100}%`;
    localStorage.setItem("escalaTexto", escalaActual);
}

function aumentarTexto() {
    if (escalaActual < 1.4) {
        escalaActual += 0.1;
        aplicarEscala();
    }
}

function disminuirTexto() {
    if (escalaActual > 0.8) {
        escalaActual -= 0.1;
        aplicarEscala();
    }
}

/* ===== Contraste ===== */

function altoContraste() {
    document.body.classList.toggle("alto-contraste");

    localStorage.setItem(
        "altoContraste",
        document.body.classList.contains("alto-contraste")
    );
}

/* ===== Escala de grises ===== */

function escalaGrises() {
    document.body.classList.toggle("escala-grises");

    localStorage.setItem(
        "escalaGrises",
        document.body.classList.contains("escala-grises")
    );
}

/* ===== Restablecer ===== */

function restablecer() {
    escalaActual = 1;
    aplicarEscala();

    document.body.classList.remove("alto-contraste", "escala-grises");

    localStorage.removeItem("altoContraste");
    localStorage.removeItem("escalaGrises");
}

/* ===== Cargar preferencias guardadas ===== */

aplicarEscala();

if (localStorage.getItem("altoContraste") === "true") {
    document.body.classList.add("alto-contraste");
}

if (localStorage.getItem("escalaGrises") === "true") {
    document.body.classList.add("escala-grises");
}