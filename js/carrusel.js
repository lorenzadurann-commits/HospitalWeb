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

// =========================
// CARRUSEL INDICAS
// =========================

const slidesIndicas = document.querySelectorAll(".slide-indicas");
const puntosIndicas = document.querySelectorAll(".punto-indicas");

let indiceIndicas = 0;


function mostrarIndicas(n){

    slidesIndicas.forEach(slide=>{
        slide.classList.remove("activa-indicas");
    });

    puntosIndicas.forEach(punto=>{
        punto.classList.remove("activo-indicas");
    });

    slidesIndicas[n].classList.add("activa-indicas");
    puntosIndicas[n].classList.add("activo-indicas");
}


document.querySelector(".siguiente-indicas").onclick=function(){

    indiceIndicas++;

    if(indiceIndicas >= slidesIndicas.length){
        indiceIndicas = 0;
    }

    mostrarIndicas(indiceIndicas);
};


document.querySelector(".anterior-indicas").onclick=function(){

    indiceIndicas--;

    if(indiceIndicas < 0){
        indiceIndicas = slidesIndicas.length - 1;
    }

    mostrarIndicas(indiceIndicas);
};


mostrarIndicas(0);


