/* 
    Funcionalidad del ckick sobre un dlide que cambia la imagen activa
*/

const slideClick = (e) => {
    // Registramos el id sobre el que hemos hecho click
    const id = e.target.dataset.id
    // Accedemos a la galeria
    const galeria = document.getElementById('galeria')
    // Registramos cual es la categoria activa
    const categoriaActiva = galeria.dataset.categoria


    console.log('Hiciste click en: ' + id, categoriaActiva)


















    // cargarImagen(id, nombre, ruta, descripcion)
}

export default slideClick