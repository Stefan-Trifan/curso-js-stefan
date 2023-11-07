/* 
    Archivo con dos funciones
    1 Función que carga la imagen activa de cada categoria
    2 Función para cargar las imágenes al pulsar siguiente/anterior
*/

const galeria = document.getElementById('galeria')

/* 1 */
const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id
    galeria.querySelector('.galeria__titulo').innerText = nombre
	galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion
    
}

export { cargarImagen };