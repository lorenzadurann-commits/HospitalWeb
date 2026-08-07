document.addEventListener("DOMContentLoaded",()=>{

const slides = document.querySelectorAll(".carrusel .slide");
const puntos = document.querySelectorAll(".carrusel .punto");

const anterior = document.querySelector(".carrusel .anterior");
const siguiente = document.querySelector(".carrusel .siguiente");


let indice = 0;


function mostrarSlide(i){

    slides.forEach(slide=>{
        slide.classList.remove("activo");
    });

    puntos.forEach(punto=>{
        punto.classList.remove("activo");
    });


    slides[i].classList.add("activo");
    puntos[i].classList.add("activo");

}


siguiente.addEventListener("click",()=>{

    indice++;

    if(indice>=slides.length){
        indice=0;
    }

    mostrarSlide(indice);

});


anterior.addEventListener("click",()=>{

    indice--;

    if(indice<0){
        indice=slides.length-1;
    }

    mostrarSlide(indice);

});


});
