document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    visionMisionSlide();
    afiliacionCondicionesToggle();
    infoCausas();
}

function infoCausas(){
    
    const asesoria = document.querySelector("#asesoria");
    const asistencia = document.querySelector("#asistencia");
    const prestamo = document.querySelector("#prestamo");
    const infoAsesoria = document.querySelector("#infoAsesoria");
    const infoAsistencia = document.querySelector("#infoAsistencia");
    const infoPrestamo = document.querySelector("#infoPrestamo");
    
    const mySwiper = document.querySelector(".mySwiper");
    mySwiper.addEventListener("slidechange", (event)=>{
        mostrarInfoAsesoria();
        mostrarInfoAsistencia();
        mostrarInfoPrestamo();
    });
}


function visionMisionSlide(){
    const vision = document.querySelector("#vision");
    const mision = document.querySelector("#mision");
    const section = document.querySelector("#section_2");
    const nav = document.querySelector("#barra-nav");

    window.addEventListener('scroll', function(){
        if(section.getBoundingClientRect().top < 0+(nav.getBoundingClientRect().height) + 50){
            vision.classList.add('contenedor-visible');
            mision.classList.add('contenedor-visible');
        }else{
            vision.classList.remove('contenedor-visible');
            mision.classList.remove('contenedor-visible');
        }
    })
}

function afiliacionCondicionesToggle(){
    const btnCondiciones = document.querySelectorAll(".btnCondiciones");
    const btnMostrarCondiciones = document.querySelector(".btnCondiciones");
    const acercaCondiciones = document.querySelector("#afiliacionCondiciones");
    btnCondiciones.forEach(boton => boton.addEventListener("click", function(){
        btnMostrarCondiciones.classList.toggle('oculto');
        acercaCondiciones.classList.toggle('visible');
    }));
}

// function causasCubo(){
//     const asesoria = document.querySelector("#asesoria");
//     const asistencia = document.querySelector("#asistencia");
//     const prestamo = document.querySelector("#prestamo");
//     const infoAsesoria = document.querySelector("#infoAsesoria");
//     const infoAsistencia = document.querySelector("#infoAsistencia");
//     const infoPrestamo = document.querySelector("#infoPrestamo");


//     asesoria.addEventListener("mouseover", mostrarInfoAsesoria);
//     asistencia.addEventListener("mouseover", mostrarInfoAsistencia);
//     prestamo.addEventListener("mouseover", mostrarInfoPrestamo);
// }

function mostrarInfoAsesoria(){
    if(asesoria.classList.contains('swiper-slide-visible')){
        if(infoAsesoria.classList.contains('oculto')){
            infoAsesoria.classList.remove('oculto');
            infoAsistencia.classList.add('oculto');
            infoPrestamo.classList.add('oculto');
        }
    }
}

function mostrarInfoAsistencia(){
    if(asistencia.classList.contains('swiper-slide-visible')){
        if(infoAsistencia.classList.contains('oculto')){
            infoAsistencia.classList.remove('oculto');
            infoPrestamo.classList.add('oculto');
            infoAsesoria.classList.add('oculto');
        }
    }
}

function mostrarInfoPrestamo(){
    if(prestamo.classList.contains('swiper-slide-visible')){
        if(infoPrestamo.classList.contains('oculto')){
            infoPrestamo.classList.remove('oculto');
            infoAsistencia.classList.add('oculto');
            infoAsesoria.classList.add('oculto');
        }
    }
}
