document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".carrusel .slide");
    const anterior = document.querySelector(".carrusel .anterior");
    const siguiente = document.querySelector(".carrusel .siguiente");

    let indice = 0;

    function mostrarSlide(i) {
        slides.forEach(slide => slide.classList.remove("activo"));
        slides[i].classList.add("activo");
    }

    // Mostrar la primera imagen al cargar
    mostrarSlide(indice);

    siguiente.addEventListener("click", () => {
        indice = (indice + 1) % slides.length;
        mostrarSlide(indice);
    });

    anterior.addEventListener("click", () => {
        indice = (indice - 1 + slides.length) % slides.length;
        mostrarSlide(indice);
    });

});