console.log(">>> CARRUSEL VIOLENCIA CARGADO <<<");

document.addEventListener("DOMContentLoaded", () => {

    const carruseles = document.querySelectorAll(".carrusel");

    console.log("Carruseles encontrados:", carruseles.length);

    // resto del código...


    carruseles.forEach((carrusel) => {

        const slides = carrusel.querySelectorAll(".slide");
        const anterior = carrusel.querySelector(".anterior");
        const siguiente = carrusel.querySelector(".siguiente");

        if (slides.length === 0) {
            return;
        }

        let indice = 0;

        function mostrarSlide(i) {

            slides.forEach((slide) => {
                slide.classList.remove("activo");
            });

            slides[i].classList.add("activo");
        }

        // Mostrar la primera imagen
        mostrarSlide(indice);

        // Flecha siguiente
        if (siguiente) {
            siguiente.addEventListener("click", () => {

                indice++;

                if (indice >= slides.length) {
                    indice = 0;
                }

                mostrarSlide(indice);
            });
        }

        // Flecha anterior
        if (anterior) {
            anterior.addEventListener("click", () => {

                indice--;

                if (indice < 0) {
                    indice = slides.length - 1;
                }

                mostrarSlide(indice);
            });
        }

    });

});

