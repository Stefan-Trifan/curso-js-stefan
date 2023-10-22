/*
    Named Imports
    Importamos en base al valor
    Utilizamos un alias
*/

import {nombre as mombreImportado, obtenerPosts} from './namedExports'

const nombre = '999'

console.log('Mi nombre es ' + mombreImportado)
console.log(obtenerPosts())

/*
    Namespace Imports
    Todo lo importamos dentro de un objeto
*/

import * as datos from './namedExports'

console.log('Mi nombre es ' + datos.nombre)
console.log(datos.obtenerPosts())