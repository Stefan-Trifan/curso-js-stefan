// 3
import cerrarGaleria from "./cerrarGaleria"
import slideClick from "./slideClick"
import { cargarAnteriorSiguiente } from "./cargarImagen"
import carousel from './carousel'
// import { cargarImagen } from "./cargarImagen"

/* 
    Contiene todos los eventos de la galeria una vez abierta:
    - Cerrar
    - Siguiente slide

    Mediante propagación de eventos, agregamos un evento a toda la galería
    Detectamos cuando hagamos click sobre un botón mediante su atributo data-accion
*/

const galeria = document.getElementById('galeria')

// Creamos el evento
galeria.addEventListener('click', (e) => {
    // Registramos el botón pulsado padre más cercano y lo guardamos dentro de una variable
    const boton = e.target.closest('button')

    // 📌 - - - CERRAR GALERÍA
    // Si el elemento al que dimos click tiene data-accion="cerrar-galeria", ejecutamos
    // Con el símbolo ? le decimos que si no cumple la condición, no devuelve error
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria()
    }

    // 📌 - - - CAROUSEL SLIDE CLICK
    // Si el elemento al que dimos click tiene el atributo data-id="", ejecutamos
    if(e.target.dataset.id){
        // cambiamos la iamgen activa
        slideClick(e)
    }

    // 📌 - - - ANTERIOR IMAGEN
    // Si el atributo data del botón es anterior-imagen,
    if(boton?.dataset?.accion === 'anterior-imagen'){
        cargarAnteriorSiguiente('anterior')
    }

    // 📌 - - - SIGUIENTE IMAGEN
    // Si el atributo data del botón es siguiente-imagen,
    if(boton?.dataset?.accion === 'siguiente-imagen'){
        cargarAnteriorSiguiente('siguiente')
    }

    // 📌 - - - ANTERIOR CAROUSEL
    // Si el atributo data del botón es anterior-slide,
    if(boton?.dataset?.accion === 'anterior-slide'){
        carousel('anterior')
    }

    // 📌 - - - SIGUIENTE CAROUSEL
    // Si el atributo data del botón es siguiente-slide,
    if(boton?.dataset?.accion === 'siguiente-slide'){
        carousel('siguiente')
    }


})