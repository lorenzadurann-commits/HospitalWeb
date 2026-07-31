const imagenes2 = document.querySelectorAll(".slides-wrapper img");
const contenedorPuntos2 = document.querySelector(".indicadores2");

let indice2 = 0;


function mostrarImagen2(n){

    imagenes2.forEach(imagen=>{
        imagen.classList.remove("slide-activa");
    });

    imagenes2[n].classList.add("slide-activa");

    actualizarPuntos2(n);
}


function actualizarPuntos2(indice){

    contenedorPuntos2.innerHTML = "";

    const total = imagenes2.length;
    const visibles = 7;

    let inicio;


    if(indice < 4){

        inicio = 0;

    }else if(indice > total - 4){

        inicio = total - visibles;

    }else{

        inicio = indice - 3;

    }


    for(let i = 0; i < visibles; i++){

        const punto = document.createElement("span");

        punto.classList.add("punto2");


        if(inicio + i === indice){

            punto.classList.add("activo-punto2");

        }


        contenedorPuntos2.appendChild(punto);

    }

}


document.querySelector(".siguiente2").onclick=function(){

    indice2++;

    if(indice2 >= imagenes2.length){

        indice2=0;

    }

    mostrarImagen2(indice2);

};



document.querySelector(".anterior2").onclick=function(){

    indice2--;

    if(indice2 < 0){

        indice2=imagenes2.length-1;

    }

    mostrarImagen2(indice2);

};


mostrarImagen2(0);