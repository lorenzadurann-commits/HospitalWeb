// ===== SEGUNDO CARRUSEL =====
const imagenes2 = document.querySelectorAll(".slides-wrapper img");
const btnAnt2 = document.querySelector(".anterior2");
const btnSig2 = document.querySelector(".siguiente2");
const contenedorPuntos2 = document.querySelector(".indicadores2");

let indice2 = 0;

function mostrarImagen2(n) {
    imagenes2.forEach(img => img.classList.remove("slide-activa"));
    imagenes2[n].classList.add("slide-activa");

    actualizarPuntos2(n);
}

function actualizarPuntos2(indice) {
    contenedorPuntos2.innerHTML = "";

    const total = imagenes2.length;
    const visibles = 7;

    let inicio;

    if (indice < 4) {
        inicio = 0;
    } else if (indice > total - 4) {
        inicio = total - visibles;
    } else {
        // el punto activo queda en la 5ª posición
        inicio = indice - 4;
    }

    for (let i = 0; i < visibles; i++) {
        const punto = document.createElement("span");
        punto.classList.add("punto2");

        if (inicio + i === indice) {
            punto.classList.add("activo-punto2");
        }

        contenedorPuntos2.appendChild(punto);
    }
}

if (btnSig2) {
    btnSig2.addEventListener("click", () => {
        indice2 = (indice2 + 1) % imagenes2.length;
        mostrarImagen2(indice2);
    });
}

if (btnAnt2) {
    btnAnt2.addEventListener("click", () => {
        indice2 = (indice2 - 1 + imagenes2.length) % imagenes2.length;
        mostrarImagen2(indice2);
    });
}

mostrarImagen2(0);