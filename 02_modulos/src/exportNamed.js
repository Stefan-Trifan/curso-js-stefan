/* Maneras de exportar I */
/***************************************************************************************
    Forma 1 - Palabra export
*/

export const nombre1 = 'Carlos1 Importado'

export const obtenerPosts1 = () => {
    return ['Post1 Importado 1', 'Post1 Importado 2', 'Post1 Importado 3']
}

/***************************************************************************************
    Forma 2 - Al final del documento
*/

const nombre2 = 'Carlos2 Importado'

const obtenerPosts2 = () => {
    return ['Post2 Importado 1', 'Post2 Importado 2', 'Post2 Importado 3']
}

export {nombre2, obtenerPosts2}