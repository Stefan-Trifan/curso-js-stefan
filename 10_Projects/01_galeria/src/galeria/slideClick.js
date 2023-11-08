import datos from './../datos/fotos'
/* 
    Funcionalidad del click sobre un slide que cambia la imagen activa
*/

const slideClick = (e) => {
    // Registramos el id sobre el que hemos hecho click
    const id = e.target.dataset.id
    // Accedemos a la galeria
    const galeria = document.getElementById('galeria')
    // Registramos cual es la categoria activa
    const categoriaActiva = galeria.dataset.categoria

    // Recorremos todos los slides de la bbdd y buscamos el slide con el id igual al nuestro
    datos.fotos[categoriaActiva].forEach(() => {
        console.log(datos.fotos[categoriaActiva].id)
    })


















    // cargarImagen(id, nombre, ruta, descripcion)
}

export default slideClick