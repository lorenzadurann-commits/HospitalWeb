document.addEventListener("DOMContentLoaded", () => {

    const carruseles = document.querySelectorAll(".carrusel");

    console.log("Carruseles encontrados:", carruseles.length);

    carruseles.forEach((carrusel) => {

        const slides = carrusel.querySelectorAll(".slide");

        const anterior = carrusel.querySelector(".anterior");
        const siguiente = carrusel.querySelector(".siguiente");

        const puntos = carrusel.querySelectorAll(".punto");

        if (slides.length === 0) {
            return;
        }

        let indice = 0;


        function mostrarSlide(i) {

            /* Quitar activo de todas las imágenes */
            slides.forEach((slide) => {
                slide.classList.remove("activo");
            });


            /* Quitar activo de todos los puntos */
            puntos.forEach((punto) => {
                punto.classList.remove("activo");
            });


            /* Activar imagen */
            slides[i].classList.add("activo");


            /* Activar punto correspondiente */
            if (puntos[i]) {
                puntos[i].classList.add("activo");
            }
        }


        /* Primera imagen */
        mostrarSlide(indice);


        /* FLECHA SIGUIENTE */

        if (siguiente) {

            siguiente.addEventListener("click", () => {

                indice++;

                if (indice >= slides.length) {
                    indice = 0;
                }

                mostrarSlide(indice);

            });

        }


        /* FLECHA ANTERIOR */

        if (anterior) {

            anterior.addEventListener("click", () => {

                indice--;

                if (indice < 0) {
                    indice = slides.length - 1;
                }

                mostrarSlide(indice);

            });

        }


        /* PUNTOS */

        puntos.forEach((punto, i) => {

            punto.addEventListener("click", () => {

                indice = i;

                mostrarSlide(indice);

            });

        });

    });

});