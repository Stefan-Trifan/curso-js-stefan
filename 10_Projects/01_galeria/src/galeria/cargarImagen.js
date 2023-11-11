// export
import data from './../datos/fotos'
/* 
    Archivo con dos funciones
    1 Función que carga el id, el título, la imagen activa y la descripción dentro de la galería, según los parámetros que le demos
    - La categoría 
    - Slide del carrusel 
    2 Función para cargar las imágenes del carrusel al pulsar las flechas
*/

// Guardamos la galeria dentro de una variable
const galeria = document.getElementById('galeria')

/* 1 */
// Cambiamos los atributos de la plantilla de galeria para mostrar la galeria que queremos
const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id                      // Ej: data-id-imagen="11"
    galeria.querySelector('.galeria__titulo').innerText = nombre                         // Ej: Europa 1
    galeria.querySelector('.galeria__imagen').src = ruta                                 // Ej: ./img/africa/1.jpg
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion // Ej: Europa 1 - Lorem ipsum dolor sit amet...

    /* 
        Funcionalidad que cambia el borde del slide según la imagen activa 
    
    */
    // Guardamos la categoría activa
    const categoriaActual = galeria.dataset.categoria
    // Fotos de la categoría actual
    const fotos = data.fotos[categoriaActual]

    let indexImagenActual
    // Recorremos el objeto que contiene los slides según la categoría activa
    fotos.forEach((foto, index) => {
        // Devuelve el index de la categoría activa
        if(foto.id === id){
            indexImagenActual = index
        }
    })

    // Si los sliedes existen,
    if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
        // Eliminamos la calse active
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active')
        // Marcamos la imagen del carrusel como activa, poniendo la clase active al slide cuyo index sea igual al de la imagen activa
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active')
    }
}

/* 2 */
const cargarAnteriorSiguiente = (direccion) => {
    // Accedemos a la categoría actual
    const categoriaActual = galeria.dataset.categoria
    // Accedemos a las fotos de la categoría
    const fotos = data.fotos[categoriaActual]
    // Guardamos el ID de la imagen actua, y lo transformamos a un número
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen)

    // Guardamos el index de la iamgen actual
    let indexImagenActual 
    fotos.forEach((foto, index) => {
        if(foto.id === idImagenActual){
            indexImagenActual = index
        }
    })

    // Cargamos la imagen anteriot/siguiente
    if(direccion === 'siguiente'){
        // Si la foto con el index existe, ejecutamos
        if(fotos[indexImagenActual + 1]) {
            // Desestructuramos las propeidades de la foto con el index posterior y las cargamos dentro de cargarImagen
            const {id, nombre, ruta, descripcion} = fotos[indexImagenActual + 1]
            cargarImagen(id, nombre, ruta, descripcion)
        }
    } else if (direccion === 'anterior'){
        // Si la foto con el index existe, ejecutamos
        if(fotos[indexImagenActual - 1]) {
            // Desestructuramos las propeidades de la foto con el index posterior y las cargamos dentro de cargarImagen
            const {id, nombre, ruta, descripcion} = fotos[indexImagenActual - 1]
            cargarImagen(id, nombre, ruta, descripcion)
        }
    }
}

// Exportamos cargarImagen
export { cargarImagen, cargarAnteriorSiguiente };