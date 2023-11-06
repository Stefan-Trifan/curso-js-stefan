/* 
    Archivo con la funcionalidad para cargar las categorias
    Archivo que vamos a utilizar para compilar

    Pasos a seguir:
        1 Creamos las categorías
        2 Con el método foreach, por cada una de las categorías creamos un elemento <a> dentro del contenedor de las categorias. 
*/

/* 1 */
// Accedemos al archivo de las categorias. Importamos los datos y los llamamos dataCategorias  
import dataCategorias from './datos/categorias'
// Desestructuramos, obtenemos las categorias y las guardamos dentro de una variable que vamos a llamar categorias
const {categorias} = dataCategorias
// Guardamos el contenedor de las categorias dentro de una variable
const contenedorCategorias = document.getElementById('categorias')

/* 2 */
categorias.forEach((categoria) => {
    // Creamos el elemento <a> por cada categoria y lo guardamos dentro de una variable: nuevaCategoria
    const nuevaCategoria = document.createElement('a')

    // Guardamos dentro de una variable la plantilla 
    const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
        </div> `

    // Guardamos la nueva plantilla dentro de <a>
    nuevaCategoria.innerHTML = plantilla

    // Agregamos los atributos de <a>
    nuevaCategoria.classList.add('categoria')
    nuevaCategoria.href = '#'
    nuevaCategoria.dataset.categoria = categoria.id
    // Insertamos en el DOM las categorias
    contenedorCategorias.append(nuevaCategoria)
})

