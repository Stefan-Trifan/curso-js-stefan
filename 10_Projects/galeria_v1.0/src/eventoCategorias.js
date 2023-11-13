// 2
import dataFotos from './datos/fotos'
import {cargarImagen} from './galeria/cargarImagen'
// Importamos la información de todas los slides del carrusel dentro del nuevo objeto dataFotos
// Importamos la función cargarImagen

/* 
    Archivo que:
        Abre la galeria cuando hacemos click sobre una categoría
        Carga los elementos (título, imágen, descripción, carrusel) de la galería según cada categoría

    Resumen:
        1 Agregamos un evento al contenedor de las categorias
        2 Detectamos con la propagación de eventos cuando demos click sobre alguna de las categorias hijo
        3 Abrimos la galeria
        4 Asignamos las imágenes que le corresponde a la categoria clicada dentro de la variable fotos
        5 Cargamos los elementos (título, imágen, descripción)
        6 Cargamos el carrousel
*/

// Guardamos el contenedor y la galeria dentro de una variable
const contenedorCategorias = document.getElementById('categorias')
const galeria = document.getElementById('galeria')

/* 1 */
// Creamos el evento click sobre el contenedor de las categorías
contenedorCategorias.addEventListener('click', (e) => {
    // Evitar que el navegador nos mande para arriba
    e.preventDefault()

    /* 2 */
    // Queremos abrir la galeria solo si hacemos click sobre una categoria.
    // Comprobamos que tiene como padre un elemento a, ejecutamos:
    if(e.target.closest('a')){
        /* 3 */
        // Abrimos la galeria
        galeria.classList.add('galeria--active')

        // Desactivamos el scroll
        document.body.style.overflow = 'hidden'
        
        /* 4 */
        // Añadimos el atributo data-categoria="" de la categoria en la que hemos hecho click
        // Esto nos va a ayudar a saber que categoria de imágenes llamar a la base de datos
        const categoriaActiva = e.target.closest('a').dataset.categoria // Ej: europa

        // Añadimos el atributo data-categoria="categoriaActiva" a la sección galeria
        galeria.dataset.categoria = categoriaActiva

        // 📌
        // Guardamos el objeto con las imágenes que pertenecen a la categoría data-categoria=""
        const fotos = dataFotos.fotos[categoriaActiva] // Ej: [{…}, {…}, {…}, ... , {…}]

        /* 5 */ 
        // Desestructuramos la primera imagen de la categoría clicada
        // Extraemos los elementos (id, título, imágen, descripción)
        // Las guardamos dentro de las nuevas variables id, nombre, ruta, descripción
        const {id, nombre, ruta, descripcion} = fotos[0] // Ej: {1, America 1, ./img/america/1.jpg, America 1 - Lorem ipsum ...} = fotos[0]

        // 📌
        // Llamamos a la función que carga la el id, título, imagen y descripción dentro de la galería,
        // Cargamos los elementos título, imágen, descripción cambiando los atributos de sus elementos HTML
        cargarImagen(id, nombre, ruta, descripcion)

        /* 6 */
        // Elimina las imágenes anteriores del carousel para solucionar errores
        const carousel = galeria.querySelector('.galeria__carousel-slides')
        carousel.innerHTML = ''

        // Cargamos el carrousel
        fotos.forEach((foto) => {

            // Creamos una plantilla por cada slide que aparece en el carrousel
            const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img class="galeria__carousel-image" src="${foto.ruta}" alt="" data-id="${foto.id}"/>
                </a> 
            `
            // Insertamos cada plantilla dentro del contenedor de slides
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide
        })

        // Marcamos la imágen activa del slide
        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active')

    } 
    
})