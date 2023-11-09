// export
import data from './fotos';
// Importamos el objeto con los datos de las imágenes del carrusel dentro de la variable data

/* 
	Archivo que contiene los datos de todas las categorías y de las imágenes del carrusel (importadas) 
*/

// Declaramos la variable fotos
// Desestructuramos el objeto data con las fotos importadas
// Extraemos todas las fotos del carrusel 
// Las guardamos dentro de fotos
   const { fotos } = data; 
// const fotos = data.fotos (Esto es lo mismo)

// Exportamos el objeto y la variable fotos por que la estamos utilizando en el objeto
// Contiene las categorías y sus imágenes de portada
export default {
	// Propiedad que contiene un arreglo de objetos.
	categorias: [
		// Caja objeto es una categoría con su info y el número de fotos
		/*  
			numeroFotos: fotos['america'].length, es dinámico 
			numeroFotos: fotos.america.length, es lo mismo
			Accedemos al objeto fotos, a la propiedad llamada 'america' y contamos cuántas imágenes de carrusel tiene 
		*/
		{ id: 'america', nombre: 'America', numeroFotos: fotos['america'].length, imagenPortada: './img/america.jpg' },
		{ id: 'europa', nombre: 'Europa', numeroFotos: fotos['europa'].length, imagenPortada: './img/europa.jpg' },
		{ id: 'africa', nombre: 'África', numeroFotos: fotos['africa'].length, imagenPortada: './img/africa.jpg' },
		{ id: 'asia', nombre: 'Asia', numeroFotos: fotos['asia'].length, imagenPortada: './img/asia.jpg' },
		{ id: 'oceania', nombre: 'Oceania', numeroFotos: fotos['oceania'].length, imagenPortada: './img/oceania.jpg' },
		{
			id: 'antartida',
			nombre: 'Antártida',
			numeroFotos: fotos['antartida'].length,
			imagenPortada: './img/antartida.jpg',
		},
	],
};
