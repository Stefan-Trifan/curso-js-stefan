// Objeto que contiene los datos de todas las categorías y de las fotos (importadas)

// Importamos los datos de las fotos 
// data es el objeto con todas las fotos
import data from './fotos';
// Desestructuramos, Extraemos las fotos y las guardamos dentro de la variable foto
const { fotos } = data; 
// const fotos = data.fotos Esto es lo mismo 

// Exportamos el objeto
export default {
	// Propiedad que contiene un arreglo de objetos con la info de cada categoría
	categorias: [
		// Declaramos un objeto por cada categoría con la información y el número de fotos

		/*  numeroFotos: fotos['america'].length, es dinámico 
			numeroFotos: fotos.america.length, es lo mismo
			Accedemos al objeto fotos, a la propiedad de america y contamos cuántas tiene */
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