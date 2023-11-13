// 1
import dataCategorias from './datos/categorias'
// Importamos el objeto de las categorías dentro de la variable dataCategorias y las variables que dependen de el

/* 
    Archivo que carga las categorias
    Archivo que vamos a utilizar para compilar

    Pasos a seguir:
        1 Con el método foreach, por cada una de las categorías creamos un elemento <a> dentro del contenedor de las categorias. 
*/

// Declaramos la variable categorias
// Desestructuramos el objeto dataCategorias con las categorias importadas
// Extraemos las categorias
// Las guardamos dentro de una variable que vamos a llamar categorias
const {categorias} = dataCategorias // 📌
// Guardamos el contenedor de las categorias
const contenedorCategorias = document.getElementById('categorias')

/* 1 */
categorias.forEach((categoria) => {
    // Creamos el elemento <a> por cada categoria
    const nuevaCategoria = document.createElement('a')

    // Guardamos la plantilla que va a tener cada categoría
    const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
        </div> `

    // Guardamos la nueva plantilla dentro del nuevo elemento que hemos creado
    nuevaCategoria.innerHTML = plantilla

    // Agregamos los atributos de la plantilla
    nuevaCategoria.classList.add('categoria')
    nuevaCategoria.href = '#'
    nuevaCategoria.dataset.categoria = categoria.id
    
    // Insertamos en el DOM las categorias
    contenedorCategorias.append(nuevaCategoria)
})

