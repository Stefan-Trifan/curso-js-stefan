import cerrarGaleria from "./cerrarGaleria"
// import { cargarImagen } from "./cargarImagen"

/* 
    Una vez abierta, contiene todos los eventos de la galeria (cerrar, ...)

    Mediante propagación de eventos, agregamos un evento a toda la galería
    Detectamos cuando hagamos click sobre un botón mediante su atributo data-accion
*/

const galeria = document.getElementById('galeria')

// Creamos el evento
galeria.addEventListener('click', (e) => {
    // Registramos el botón pulsado padre más cercano y lo guardamos dentro de una variable
    const boton = e.target.closest('button')

    // Evento Cerrar galeria
    // Comprobamos si el botón pulsado tiene el atributo dataset
    // Con el símbolo ? le decimos que si no cumple la condición no pasa nada
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria()
    }
})