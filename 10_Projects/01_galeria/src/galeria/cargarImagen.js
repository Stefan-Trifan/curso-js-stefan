// export
import data from './../datos/fotos'
/* 
    Archivo con dos funciones
    1 Función que carga el id, el título, la imagen activa y la descripción dentro de la galería, según los parámetros que le demos
    - La categoría 
    - Slide del carrusel 
    2 Función para cargar las imágenes del carrusel al pulsar ???
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

// Exportamos cargarImagen
export { cargarImagen };