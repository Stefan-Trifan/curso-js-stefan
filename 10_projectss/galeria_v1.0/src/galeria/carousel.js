/* 
    Función para girar el carrousel

    Trabajaremos con la API de intersection observer
    Nos permitirá ejecutar código dependiendo si el contenido es visible o no

    Resumen:
        - Queremos detectar cuales son los slides visibles
        - Obtenemos el index de el ultimo slide visible, y el siguiente elemento
        - Al obtener el elemento hacemos scroll con JS

    Vídeo explicativo: https://www.youtube.com/watch?v=cVsqA4NhDoI
*/
const galeria = document.getElementById('galeria')
const carousel = (direccion) => {
    // Creamos un objeto de opciones 
    const opciones = {
        // Vigilamos que las imagenes entren/salgan del carrousel
        root: document.querySelector('.galeria__carousel-slides'),
        rootMargin: '0px',
        // Que porcentaje de la imagen tiene que estar dentro para considerar que está visible
        threshold: 0.9
    }

    // Creamos el observador // Creamos una nueva instancia
    // Ejecutamos un callback dependiendo de si los elementos de nuestra página entran o salen
    // Observamos las imagenes cuando entren o salgan del carousel
    // Esta función se ejecutará cada vez que haya cambios en la visibilidad de algun elemento que estamos vigilando
    // entradas es el arreglo que contiene todos los slides
    const observer = new IntersectionObserver((entradas) => {
        // Guardamos dentro de un arreglo los elementos visibles
        const sldiesVisibles = entradas.filter((entrada) => {
            if(entrada.isIntersecting){
                return entrada;
            }
        })

        if(direccion === 'anterior'){
            // Obtenemos el primer slide visible
            const primerSlideVisible = sldiesVisibles[0]
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible)

            // Nos aseguramos de que hay suficienes slides para hacer scroll
            if(indexPrimerSlideVisible >= 1){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                })   
            }
        } else if (direccion === 'siguiente'){
            // Queremos obtener el index del último slide visible 
            const ultimaSlideVisible = sldiesVisibles[sldiesVisibles.length - 1]
            const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible)
            
            // Nos aseguramos de que hay suficienes slides para hacer scroll
            if(entradas.length - 1 > indexUltimoSlideVisible){
                /*   
                📌 .scrollIntoView() - Realizamos el scroll  
                */
                // Accedemos al objetivo
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                })                
            }
        }

        /* Detectamos hacia cual slide queremos movernos */

        /* Dejamos de observar */
        const slides = galeria.querySelectorAll('.galeria__carousel-slide')
        slides.forEach((slide) => {
            observer.unobserve(slide)
        })
    }, opciones)

    const slides = galeria.querySelectorAll('.galeria__carousel-slide')
    // Observamos cada uno de los slides
    slides.forEach((slide) => {
        // Ejecutamos el método observe
        observer.observe(slide)
    })
}

export default carousel