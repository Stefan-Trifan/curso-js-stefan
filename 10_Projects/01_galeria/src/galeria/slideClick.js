import datos from './../datos/fotos'
import {cargarImagen} from './cargarImagen'
/* 
    Funcionalidad del click sobre un slide que cambia la imagen activa
*/

const slideClick = (e) => {
    let ruta, nombre, descripcion

    // Registramos el id sobre el que hemos hecho click, y lo convertimos en un número
    const id = parseInt(e.target.dataset.id) 
    // Accedemos a la galeria
    const galeria = document.getElementById('galeria')
    // Registramos cual es la categoria activa
    const categoriaActiva = galeria.dataset.categoria

    // Recorremos todos los slides de la bbdd y buscamos el slide con el id igual al que hemos seleccionado
    datos.fotos[categoriaActiva].forEach((foto) => {
        if(foto.id === id){
            // Obtenemos los datos de la imagen a la que clicamos y las cargamos en cargarimagen
            ruta = foto.ruta
            nombre = foto.nombre
            descripcion = foto.descripcion
        }
        cargarImagen(id, nombre, ruta, descripcion)

    })


















    // cargarImagen(id, nombre, ruta, descripcion)
}

export default slideClick