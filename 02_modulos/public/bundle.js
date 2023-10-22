'use strict';

/*  
    Forma 1 - Palabra export
*/

// export const nombre = 'Carlos'

// export const obtenerPosts = () => {
//     return ['Post1', 'Post2', 'Post3']
// }

/*  
    Forma 2 - Palabra export
*/

const nombre = 'Carlos';

const obtenerPosts = () => {
    return ['Post1', 'Post2', 'Post3']
};

/*
    Named Imports
    Importamos en base al valor
    Utilizamos un alias
*/


console.log('Mi nombre es ' + nombre);
console.log(obtenerPosts());

console.log('Mi nombre es ' + nombre);
console.log(obtenerPosts());
