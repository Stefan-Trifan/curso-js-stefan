/* Maneras de exportar II */

/***************************************************************************************
    Forma 1: Mediante export/Default
    Exportamos una sola función
    Cuando tenemos una sola función por archivo
    No especificamos ningún nombre
*/

export default () => {
    return {
        nombre: 'Steve',
        correo: 'correo@correo.com'
    }
}

/***************************************************************************************
    Forma 2: Final del documento
*/

// const obtenerUsuario = () => {
//     return {
//         nombre: 'Carlos',
//         correo: 'correo@correo.com'
//     }
// }

// export default obtenerUsuario