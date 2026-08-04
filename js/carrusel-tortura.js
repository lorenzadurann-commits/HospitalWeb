const slidesFinal = document.querySelectorAll(".slide-final");
const puntosFinal = document.querySelectorAll(".punto-final");

let indiceFinal = 0;


function mostrarFinal(n){

    slidesFinal.forEach(slide => {
        slide.classList.remove("activa-final");
    });

    puntosFinal.forEach(punto => {
        punto.classList.remove("activo-final");
    });

    slidesFinal[n].classList.add("activa-final");
    puntosFinal[n].classList.add("activo-final");
}


document.querySelector(".siguiente-final").onclick = function(){

    indiceFinal++;

    if(indiceFinal >= slidesFinal.length){
        indiceFinal = 0;
    }

    mostrarFinal(indiceFinal);
};


document.querySelector(".anterior-final").onclick = function(){

    indiceFinal--;

    if(indiceFinal < 0){
        indiceFinal = slidesFinal.length - 1;
    }

    mostrarFinal(indiceFinal);
};


mostrarFinal(0);
