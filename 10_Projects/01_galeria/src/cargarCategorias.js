// Archivo con la funcionalidad para cargar las categorias

// Accedemos al archivo de las categorias
// Importamos los datos como dataCategorias  
import dataCategorias from './datos/categorias'
// Desestructuramos, obtenemos las categorias y las guardamos dentro de una variable (categorias)
const { categorias } = dataCategorias
// Guardamos el contenedor de categorias dentro de una variable
const contenedorCategorias = document.getElementById('categorias')

