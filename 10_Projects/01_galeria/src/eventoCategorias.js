import dataFotos from './datos/fotos'
// Dentro del objeto dataFotos contenemos la información de todas las fotos

/* 
    Archivo que abre la galeria cuando hacemos click sobre las categorias 

    Pasos a seguir:
        1 Agregamos un evento al contenedor de las categorias
        2 Detectamos con la propagación de eventos cuando demos click sobre alguna de las categorias hijo
        3 Asignamos las fotos de la categoria que nos corresponde dentro de una variable
        4 Cargamos las fotos en el carrousel
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
        // Mostramos la galeria
        galeria.classList.add('galeria--active')

        // Desactivamos el scroll
        document.body.style.overflow = 'hidden'
        
        /* 3 */
        // Registramos dentro de una variable el atributo data del enlace de la categoria en la que hace click el usuario
        const categoriaActiva = e.target.closest('a').dataset.categoria

        // Registramos las fotos que pertenecen a la categoría seleccionada
        const fotos = dataFotos.fotos[categoriaActiva]

        // Elimina las imágenes anteriores del carousel para solucionar errores
        const carousel = galeria.querySelector('.galeria__carousel-slides')
        carousel.innerHTML = ''

        /* 4 */
        fotos.forEach((foto) => {
            // Creamos la plantilla de las imágenes que aparecen en el slide
            const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
                </a> 
            `
            // Insertamos la plantilla dentro del contenedor de slides
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide


        })

        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active')

    } 
    
})