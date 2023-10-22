'use strict';

/* Maneras de exportar I */
/***************************************************************************************
    Forma 1 - Palabra export
*/


/***************************************************************************************
    Forma 2 - Al final del documento
*/

const nombre2 = 'Carlos2 Importado';

const obtenerPosts2 = () => {
    return ['Post2 Importado 1', 'Post2 Importado 2', 'Post2 Importado 3']
};

/* Maneras de exportar II */

/***************************************************************************************
    Forma 1: Mediante export/Default
    Exportamos una sola función
    Cuando tenemos una sola función por archivo
    No especificamos ningún nombre
*/

var obtener = () => {
    return {
        nombre: 'Steve',
        correo: 'correo@correo.com'
    }
};

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

/* Maneras de exportar III */

/***************************************************************************************

*/

console.log('Soy código desde Empty Export');

/* Maneras de importar */

/***************************************************************************************
    Named Imports
    Importamos en base al valor
    Utilizamos un alias
*/
console.log('________ Named Imports ________');

// Llamamos a los objetos importados
console.log('Mi nombre es ' + nombre2);
console.log(obtenerPosts2());

/***************************************************************************************
    Namespace Imports
    Todo lo importamos dentro de un objeto
    Se utiliza poco
*/
console.log('________  Namespace Imports ________');

// Llamamos a los objetos importados dentro del objeto datos
console.log('Mi nombre es ' + nombre2);
console.log(obtenerPosts2());

/***************************************************************************************
    Default Imports
    Cuando solo tenemos una función por archivo
    No hace falta utilziar llaves
    Solamente estamos importando/exportando una sola cosa, no múltiples valores
    Podemos utilizar el nombre que nosotros queramos
*/
console.log('________ Default Imports ________');
console.log(obtener());

/***************************************************************************************
    Empty Imports 
    Carga todo el código pero sin crear ningún objeto
    Para condicionales o ciclos que no queremos guardar dentro de una variable 
    No queremos trabajar con funciones
    Por defecto no importa las variables, por lo que habrá que exportarlas/importarlas aparte
*/
console.log('________ Empty Imports ________');
