// export
/* 
    Archivo con dos funciones
    1 Función que carga el id, el título, la imagen activa y la descripción dentro de la galería, al hacer click sobre: 
    - La categoría 
    - Slide del carrusel 
    2 Función para cargar las imágenes del carrusel al pulsar ???
*/

// Guardamos la galeria dentro de una variable
const galeria = document.getElementById('galeria')

/* 1 */
// Cambiamos los atributos de la plantilla de galeria para mostrar la galeria que queremos
const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id
    // Ej: data-id-imagen="11"
    galeria.querySelector('.galeria__titulo').innerText = nombre
    // Ej: Europa 1
    galeria.querySelector('.galeria__imagen').src = ruta;
    // Ej: ./img/africa/1.jpg
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion
    // Ej: Europa 1 - Lorem ipsum dolor sit amet...
}

// Exportamos cargarImagen
export { cargarImagen };