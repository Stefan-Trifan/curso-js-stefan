import dataFotos from './datos/fotos'
import {cargarImagen} from './galeria/cargarImagen'
// Importamos la información de todas las fotos del carrusel dentro del nuevo objeto dataFotos
// Importamos la función cargarImagen

/* 
    Archivo que:
        ABRE la galeria cuando hacemos click sobre las categorias 
        CARGA los elementos (título, imágen, descripción, carrusel) de la galería según cada categoría

    Pasos a seguir:
        1 Agregamos un evento al contenedor de las categorias
        2 Detectamos con la propagación de eventos cuando demos click sobre alguna de las categorias hijo
        3 Abrimos la galeria
        4 Asignamos las imágenes que le corresponde a la categoria dentro de una variable
        5 Cargamos la imágen destacada
        6 Cargamos el carrousel
*/

// Guardamos el contenedor y la galeria dentro de una variable
const contenedorCategorias = document.getElementById('categorias')
const galeria = document.getElementById('galeria')

/* 1 */
// Creamos el evento
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault()

    /* 2 */
    // Queremos abrir la galeria solo si hacemos click sobre una categoria
    // Detectamos cual es el elemento en el que hicimos click
    // Si alguien hace click sobre la categoria, y comprobamos que tiene como padre un elemento a, ejecutamos:
    // Si doy click  sobre el contenedor pero no sobre la categoria, no ejecutamos
    if(e.target.closest('a')){
        /* 3 */
        // Abrimos la galeria
        galeria.classList.add('galeria--active')

        // Desactivamos el scroll
        document.body.style.overflow = 'hidden'
        
        /* 4 */
        // Guardamos el atributo data-categoria del enlace en la que hace click el usuario, dentro de la variable categoriaActiva
        // Esto nos va a ayudar a saber que categoria de imágenes llamar a la base de datos
        const categoriaActiva = e.target.closest('a').dataset.categoria
        // Ej: europa

        // Guardamos el objeto con las imágenes que pertenecen a la categoría data-categoria=""
        const fotos = dataFotos.fotos[categoriaActiva]
        // Ej: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

        /* 5 */
        // Declaramos las nuevas variables id, nombre, ruta, descripción
        // Desestructuramos la primera foto, del objeto fotos, con todas las imágenes de cada categoría
        // Extraemos las propiedades id, nombre, ruta, descripción de la primera imagen
        // Las guardamos dentro de id, nombre, ruta, descripción
        // Obtenemos los parámetros de cargarImagen()
        const {id, nombre, ruta, descripcion} = fotos[0]
        // Ej: id         : 1
        // Ej: nombre     : America 1
        // Ej: ruta       : ./img/america/1.jpg
        // Ej: descripcion: America 1 - Lorem ipsum dolor sit amet...


        // Llamamos a la función que carga la el id, título, imagen y descripción dentro de la galería,
        // Según los atributos de la primera foto
        // Cargamos el id, título, imagen y descripción
        // Cambiando los atributos de sus elementos
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
                    <img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
                </a> 
            `
            // Insertamos cada plantilla dentro del contenedor de slides
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide


        })

        // Marcamos la imágen activa del slide
        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active')

    } 
    
})