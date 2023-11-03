'use strict';

/* Maneras de importar */




/***************************************************************************************
    Named Imports
    Importamos en base al valor
    Utilizamos un alias
*/
console.log('________ Named Imports ________')

import { nombre2 as mombreImportado, obtenerPosts2 } from './01_exportNamed'

// Llamamos a los objetos importados
console.log('Mi nombre es ' + mombreImportado)
console.log(obtenerPosts2())




/***************************************************************************************
    Namespace Imports
    Todo lo importamos dentro de un objeto
    Se utiliza poco
*/
console.log('________  Namespace Imports ________')

import * as datos from './01_exportNamed'

// Llamamos a los objetos importados dentro del objeto datos
console.log('Mi nombre es ' + datos.nombre2)
console.log(datos.obtenerPosts2())




/***************************************************************************************
    Default Imports
    Cuando solo tenemos una función por archivo
    No hace falta utilziar llaves
    Solamente estamos importando/exportando una sola cosa, no múltiples valores
    Podemos utilizar el nombre que nosotros queramos
*/
console.log('________ Default Imports ________')

import obtener from './02_exportDefault';
console.log(obtener())




/***************************************************************************************
    Empty Imports 
    Carga todo el código pero sin crear ningún objeto
    Para condicionales o ciclos que no queremos guardar dentro de una variable 
    No queremos trabajar con funciones
    Por defecto no importa las variables, por lo que habrá que exportarlas/importarlas aparte
*/
console.log('________ Empty Imports ________')

import './03_exportEmpty'