'use strict';

// export
/* 
	Objeto que contiene las imágenes del carrusel
*/

/*  
	fotos : {
		categoria1 : [{IMG} {IMG} {IMG}]
		categoria2 : [{IMG} {IMG} {IMG}]
		categoria3 : [{IMG} {IMG} {IMG}]
	}
	
*/

// Exportamos las imágenes del carrusel como objeto llamado por defecto
var datos = {
	// Propeidad que contiene un objeto
	fotos: {
		// Propiedad que contiene un arreglo
		america: [
			// Elemento del arreglo
			{
				id: 1,
				nombre: 'America 1',
				descripcion:
					'America 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/1.jpg',
			},
			{
				id: 2,
				nombre: 'America 2',
				descripcion:
					'America 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/2.jpg',
			},
			{
				id: 3,
				nombre: 'America 3',
				descripcion:
					'America 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/3.jpg',
			},
			{
				id: 4,
				nombre: 'America 4',
				descripcion:
					'America 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/4.jpg',
			},
			{
				id: 5,
				nombre: 'America 5',
				descripcion:
					'America 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/5.jpg',
			},
			{
				id: 6,
				nombre: 'America 6',
				descripcion:
					'America 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/6.jpg',
			},
			{
				id: 7,
				nombre: 'America 7',
				descripcion:
					'America 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/7.jpg',
			},
			{
				id: 8,
				nombre: 'America 8',
				descripcion:
					'America 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/8.jpg',
			},
			{
				id: 9,
				nombre: 'America 9',
				descripcion:
					'America 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/9.jpg',
			},
			{
				id: 10,
				nombre: 'America 10',
				descripcion:
					'America 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/10.jpg',
			},
		],
		europa: [
			{
				id: 11,
				nombre: 'Europa 1',
				descripcion:
					'Europa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/1.jpg',
			},
			{
				id: 12,
				nombre: 'Europa 2',
				descripcion:
					'Europa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/2.jpg',
			},
			{
				id: 13,
				nombre: 'Europa 3',
				descripcion:
					'Europa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/3.jpg',
			},
			{
				id: 14,
				nombre: 'Europa 4',
				descripcion:
					'Europa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/4.jpg',
			},
			{
				id: 15,
				nombre: 'Europa 5',
				descripcion:
					'Europa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/5.jpg',
			},
			{
				id: 16,
				nombre: 'Europa 6',
				descripcion:
					'Europa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/6.jpg',
			},
			{
				id: 17,
				nombre: 'Europa 7',
				descripcion:
					'Europa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/7.jpg',
			},
			{
				id: 18,
				nombre: 'Europa 8',
				descripcion:
					'Europa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/8.jpg',
			},
			{
				id: 19,
				nombre: 'Europa 9',
				descripcion:
					'Europa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/9.jpg',
			},
			{
				id: 20,
				nombre: 'Europa 10',
				descripcion:
					'Europa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/10.jpg',
			},
		],
		africa: [
			{
				id: 21,
				nombre: 'África 1',
				descripcion:
					'África 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/1.jpg',
			},
			{
				id: 22,
				nombre: 'África 2',
				descripcion:
					'África 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/2.jpg',
			},
			{
				id: 23,
				nombre: 'África 3',
				descripcion:
					'África 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/3.jpg',
			},
			{
				id: 24,
				nombre: 'África 4',
				descripcion:
					'África 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/4.jpg',
			},
			{
				id: 25,
				nombre: 'África 5',
				descripcion:
					'África 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/5.jpg',
			},
			{
				id: 26,
				nombre: 'África 6',
				descripcion:
					'África 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/6.jpg',
			},
			{
				id: 27,
				nombre: 'África 7',
				descripcion:
					'África 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/7.jpg',
			},
			{
				id: 28,
				nombre: 'África 8',
				descripcion:
					'África 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/8.jpg',
			},
			{
				id: 29,
				nombre: 'África 9',
				descripcion:
					'África 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/9.jpg',
			},
			{
				id: 30,
				nombre: 'África 10',
				descripcion:
					'África 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/10.jpg',
			},
		],
		asia: [
			{
				id: 31,
				nombre: 'Asia 1',
				descripcion:
					'Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/1.jpg',
			},
			{
				id: 32,
				nombre: 'Asia 2',
				descripcion:
					'Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/2.jpg',
			},
			{
				id: 33,
				nombre: 'Asia 3',
				descripcion:
					'Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/3.jpg',
			},
			{
				id: 34,
				nombre: 'Asia 4',
				descripcion:
					'Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/4.jpg',
			},
			{
				id: 35,
				nombre: 'Asia 5',
				descripcion:
					'Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/5.jpg',
			},
			{
				id: 36,
				nombre: 'Asia 6',
				descripcion:
					'Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/6.jpg',
			},
			{
				id: 37,
				nombre: 'Asia 7',
				descripcion:
					'Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/7.jpg',
			},
			{
				id: 38,
				nombre: 'Asia 8',
				descripcion:
					'Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/8.jpg',
			},
			{
				id: 39,
				nombre: 'Asia 9',
				descripcion:
					'Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/9.jpg',
			},
			{
				id: 40,
				nombre: 'Asia 10',
				descripcion:
					'Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/10.jpg',
			},
		],
		oceania: [
			{
				id: 41,
				nombre: 'Oceania 1',
				descripcion:
					'Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/1.jpg',
			},
			{
				id: 42,
				nombre: 'Oceania 2',
				descripcion:
					'Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/2.jpg',
			},
			{
				id: 43,
				nombre: 'Oceania 3',
				descripcion:
					'Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/3.jpg',
			},
			{
				id: 44,
				nombre: 'Oceania 4',
				descripcion:
					'Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/4.jpg',
			},
			{
				id: 45,
				nombre: 'Oceania 5',
				descripcion:
					'Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/5.jpg',
			},
			{
				id: 46,
				nombre: 'Oceania 6',
				descripcion:
					'Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/6.jpg',
			},
			{
				id: 47,
				nombre: 'Oceania 7',
				descripcion:
					'Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/7.jpg',
			},
			{
				id: 48,
				nombre: 'Oceania 8',
				descripcion:
					'Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/8.jpg',
			},
			{
				id: 49,
				nombre: 'Oceania 9',
				descripcion:
					'Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/9.jpg',
			},
			{
				id: 50,
				nombre: 'Oceania 10',
				descripcion:
					'Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/10.jpg',
			},
		],
		antartida: [
			{
				id: 51,
				nombre: 'Antártida 1',
				descripcion:
					'Antártida 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/1.jpg',
			},
			{
				id: 52,
				nombre: 'Antártida 2',
				descripcion:
					'Antártida 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/2.jpg',
			},
			{
				id: 53,
				nombre: 'Antártida 3',
				descripcion:
					'Antártida 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/3.jpg',
			},
			{
				id: 54,
				nombre: 'Antártida 4',
				descripcion:
					'Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/4.jpg',
			},
			{
				id: 55,
				nombre: 'Antártida 5',
				descripcion:
					'Antártida 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/5.jpg',
			},
			{
				id: 56,
				nombre: 'Antártida 6',
				descripcion:
					'Antártida 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/6.jpg',
			},
			{
				id: 57,
				nombre: 'Antártida 7',
				descripcion:
					'Antártida 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/7.jpg',
			},
			{
				id: 58,
				nombre: 'Antártida 8',
				descripcion:
					'Antártida 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/8.jpg',
			},
			{
				id: 59,
				nombre: 'Antártida 9',
				descripcion:
					'Antártida 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/9.jpg',
			},
		],
	},
};

// export
// Importamos el objeto con los datos de las imágenes del carrusel dentro de la variable data

/* 
	Archivo que contiene los datos de todas las categorías y de las imágenes del carrusel (importadas) 
*/

// Declaramos la variable fotos
// Desestructuramos el objeto data con las fotos importadas
// Extraemos todas las fotos del carrusel 
// Las guardamos dentro de fotos
   const { fotos } = datos; 
// const fotos = data.fotos (Esto es lo mismo)

// Exportamos el objeto y la variable fotos por que la estamos utilizando en el objeto
// Contiene las categorías y sus imágenes de portada
var dataCategorias = {
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

// 1
// Importamos el objeto de las categorías dentro de la variable dataCategorias y las variables que dependen de el

/* 
    Archivo que carga las categorias
    Archivo que vamos a utilizar para compilar

    Pasos a seguir:
        1 Creamos las categorías
        2 Con el método foreach, por cada una de las categorías creamos un elemento <a> dentro del contenedor de las categorias. 
*/

/* 1 */
// Declaramos la variable categorias
// Desestructuramos el objeto dataCategorias con las categorias importadas
// Extraemos las categorias
// Las guardamos dentro de una variable que vamos a llamar categorias
const {categorias} = dataCategorias; // 📌
// Guardamos el contenedor de las categorias dentro de una variable
const contenedorCategorias$1 = document.getElementById('categorias');

/* 2 */
categorias.forEach((categoria) => {
    // Creamos el elemento <a> por cada categoria y lo guardamos dentro de una variable nuevaCategoria
    const nuevaCategoria = document.createElement('a');

    // Guardamos dentro de una variable la plantilla que va a tener cada categoría
    const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
        </div> `;

    // Guardamos la nueva plantilla dentro del nuevo elemento que hemos creado
    nuevaCategoria.innerHTML = plantilla;

    // Agregamos los atributos de <a>
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    nuevaCategoria.dataset.categoria = categoria.id;
    
    // Insertamos en el DOM las categorias
    contenedorCategorias$1.append(nuevaCategoria);
});

// export
/* 
    Archivo con dos funciones
    1 Función que carga el id, el título, la imagen activa y la descripción dentro de la galería, según los parámetros que le demos
    - La categoría 
    - Slide del carrusel 
    2 Función para cargar las imágenes del carrusel al pulsar ???
*/

// Guardamos la galeria dentro de una variable
const galeria$3 = document.getElementById('galeria');

/* 1 */
// Cambiamos los atributos de la plantilla de galeria para mostrar la galeria que queremos
const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria$3.querySelector('.galeria__imagen').dataset.idImagen = id;                      // Ej: data-id-imagen="11"
    galeria$3.querySelector('.galeria__titulo').innerText = nombre;                         // Ej: Europa 1
    galeria$3.querySelector('.galeria__imagen').src = ruta;                                 // Ej: ./img/africa/1.jpg
    galeria$3.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion; // Ej: Europa 1 - Lorem ipsum dolor sit amet...

    /* 
        Funcionalidad que cambia el borde del slide según la imagen activa 
    
    */
    // Guardamos la categoría activa
    const categoriaActual = galeria$3.dataset.categoria;
    // Fotos de la categoría actual
    const fotos = datos.fotos[categoriaActual];

    let indexImagenActual;
    // Recorremos el objeto que contiene los slides según la categoría activa
    fotos.forEach((foto, index) => {
        // Devuelve el index de la categoría activa
        if(foto.id === id){
            indexImagenActual = index;
        }
    });

    // Si los sliedes existen,
    if (galeria$3.querySelectorAll('.galeria__carousel-slide').length > 0) {
        // Eliminamos la calse active
        galeria$3.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        // Marcamos la imagen del carrusel como activa, poniendo la clase active al slide cuyo index sea igual al de la imagen activa
        galeria$3.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }
};

// 2
// Importamos la información de todas los slides del carrusel dentro del nuevo objeto dataFotos
// Importamos la función cargarImagen

/* 
    Archivo que:
        Abre la galeria cuando hacemos click sobre una categoría
        Carga los elementos (título, imágen, descripción, carrusel) de la galería según cada categoría

    Resumen:
        1 Agregamos un evento al contenedor de las categorias
        2 Detectamos con la propagación de eventos cuando demos click sobre alguna de las categorias hijo
        3 Abrimos la galeria
        4 Asignamos las imágenes que le corresponde a la categoria clicada dentro de la variable fotos
        5 Cargamos los elementos (título, imágen, descripción)
        6 Cargamos el carrousel
*/

// Guardamos el contenedor y la galeria dentro de una variable
const contenedorCategorias = document.getElementById('categorias');
const galeria$2 = document.getElementById('galeria');

/* 1 */
// Creamos el evento click sobre el contenedor de las categorías
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();

    /* 2 */
    // Queremos abrir la galeria solo si hacemos click sobre una categoria.
    // Comprobamos que tiene como padre un elemento a, ejecutamos:
    if(e.target.closest('a')){
        /* 3 */
        // Abrimos la galeria
        galeria$2.classList.add('galeria--active');

        // Desactivamos el scroll
        document.body.style.overflow = 'hidden';
        
        /* 4 */
        // Añadimos el atributo data-categoria="" de la categoria en la que hemos hecho click
        // Esto nos va a ayudar a saber que categoria de imágenes llamar a la base de datos
        const categoriaActiva = e.target.closest('a').dataset.categoria; // Ej: europa

        // Añadimos el atributo data-categoria="categoriaActiva" a la sección galeria
        galeria$2.dataset.categoria = categoriaActiva;

        // 📌
        // Guardamos el objeto con las imágenes que pertenecen a la categoría data-categoria=""
        const fotos = datos.fotos[categoriaActiva]; // Ej: [{…}, {…}, {…}, ... , {…}]

        /* 5 */ 
        // Desestructuramos la primera imagen de la categoría clicada
        // Extraemos los elementos (id, título, imágen, descripción)
        // Las guardamos dentro de las nuevas variables id, nombre, ruta, descripción
        const {id, nombre, ruta, descripcion} = fotos[0]; // Ej: {1, America 1, ./img/america/1.jpg, America 1 - Lorem ipsum ...} = fotos[0]

        // 📌
        // Llamamos a la función que carga la el id, título, imagen y descripción dentro de la galería,
        // Cargamos los elementos título, imágen, descripción cambiando los atributos de sus elementos HTML
        cargarImagen(id, nombre, ruta, descripcion);

        /* 6 */
        // Elimina las imágenes anteriores del carousel para solucionar errores
        const carousel = galeria$2.querySelector('.galeria__carousel-slides');
        carousel.innerHTML = '';

        // Cargamos el carrousel
        fotos.forEach((foto) => {

            // Creamos una plantilla por cada slide que aparece en el carrousel
            const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img class="galeria__carousel-image" src="${foto.ruta}" alt="" data-id="${foto.id}"/>
                </a> 
            `;
            // Insertamos cada plantilla dentro del contenedor de slides
            galeria$2.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        // Marcamos la imágen activa del slide
        galeria$2.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');

    } 
    
});

// export
/* 
    Función que se encarga de cerrar la galería
*/

const galeria$1 = document.getElementById('galeria');

const cerrarGaleria = () => {
    galeria$1.classList.remove('galeria--active');
    document.body.style.overflow = '';
};

// export
/* 
    Funcionalidad del click sobre un slide que cambia la imagen activa
*/

const slideClick = (e) => {
    let ruta, nombre, descripcion;

    // Registramos el id sobre el que hemos hecho click, y lo convertimos en un número
    const id = parseInt(e.target.dataset.id); 

    // Accedemos a la galeria
    const galeria = document.getElementById('galeria');

    // Registramos cual es la categoria activa
    const categoriaActiva = galeria.dataset.categoria;

    // Recorremos todos los slides de la bbdd y buscamos el slide con el id igual al que hemos seleccionado
    datos.fotos[categoriaActiva].forEach((foto) => {
        if(foto.id === id){
            // Obtenemos los datos de la imagen a la que clicamos y las cargamos en cargarimagen
            
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });

    // Cargamos la imagen activa
    cargarImagen(id, nombre, ruta, descripcion);
};

// 3
// import { cargarImagen } from "./cargarImagen"

/* 
    Contiene todos los eventos de la galeria una vez abierta:
    - Cerrar
    - Siguiente slide

    Mediante propagación de eventos, agregamos un evento a toda la galería
    Detectamos cuando hagamos click sobre un botón mediante su atributo data-accion
*/

const galeria = document.getElementById('galeria');

// Creamos el evento
galeria.addEventListener('click', (e) => {
    // Registramos el botón pulsado padre más cercano y lo guardamos dentro de una variable
    const boton = e.target.closest('button');

    // 📌 CERRAR GALERÍA
    // Si el elemento al que dimos click tiene data-accion="cerrar-galeria", ejecutamos
    // Con el símbolo ? le decimos que si no cumple la condición, no devuelve error
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
    }

    // 📌 CAROUSEL SLIDE CLICK
    // Si el elemento al que dimos click tiene el atributo data-id="", ejecutamos
    if(e.target.dataset.id){
        slideClick(e);
    }
});
