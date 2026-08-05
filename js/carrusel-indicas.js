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

document.addEventListener("DOMContentLoaded",()=>{

    const slidesIndicas =
        document.querySelectorAll(".slide-indicas");

    const puntosIndicas =
        document.querySelectorAll(".punto-indicas");

    const anteriorIndicas =
        document.querySelector(".anterior-indicas");

    const siguienteIndicas =
        document.querySelector(".siguiente-indicas");


    let indiceIndicas = 0;


    function mostrarIndicas(indice){

        slidesIndicas.forEach(slide=>{
            slide.classList.remove("activa-indicas");
        });

        puntosIndicas.forEach(punto=>{
            punto.classList.remove("activo-indicas");
        });


        slidesIndicas[indice]
            .classList.add("activa-indicas");

        puntosIndicas[indice]
            .classList.add("activo-indicas");

    }


    siguienteIndicas.addEventListener("click",()=>{

        indiceIndicas++;

        if(indiceIndicas >= slidesIndicas.length){
            indiceIndicas = 0;
        }

        mostrarIndicas(indiceIndicas);

    });


    anteriorIndicas.addEventListener("click",()=>{

        indiceIndicas--;

        if(indiceIndicas < 0){
            indiceIndicas = slidesIndicas.length-1;
        }

        mostrarIndicas(indiceIndicas);

    });


});
