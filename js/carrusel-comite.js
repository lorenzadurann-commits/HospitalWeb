// =========================
// CARRUSEL PRINCIPAL
// =========================

let indice = 0;

const slides = document.querySelectorAll(".carrusel .slide");
const puntos = document.querySelectorAll(".carrusel .punto");


function mostrarSlide(n){

    slides.forEach(slide=>{
        slide.classList.remove("activo");
    });

    puntos.forEach(punto=>{
        punto.classList.remove("activo");
    });


    slides[n].classList.add("activo");
    puntos[n].classList.add("activo");

}


document.querySelector(".siguiente").onclick=function(){

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    mostrarSlide(indice);

};


document.querySelector(".anterior").onclick=function(){

    indice--;

    if(indice < 0){
        indice = slides.length - 1;
    }

    mostrarSlide(indice);


}; 

