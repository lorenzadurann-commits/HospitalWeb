// ===== PRIMER CARRUSEL =====
const slides = document.querySelectorAll(".carrusel .slide");
const puntos = document.querySelectorAll(".indicadores .punto");
const btnAnt = document.querySelector(".anterior");
const btnSig = document.querySelector(".siguiente");

let indice = 0;

function mostrarSlide(n) {
    slides.forEach(slide => slide.classList.remove("activo"));
    puntos.forEach(punto => punto.classList.remove("activo"));

    slides[n].classList.add("activo");
    puntos[n].classList.add("activo");
}

if (btnSig) {
    btnSig.addEventListener("click", () => {
        indice = (indice + 1) % slides.length;
        mostrarSlide(indice);
    });
}

if (btnAnt) {
    btnAnt.addEventListener("click", () => {
        indice = (indice - 1 + slides.length) % slides.length;
        mostrarSlide(indice);
    });
}

mostrarSlide(0);

