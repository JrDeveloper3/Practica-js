
// Recibimos un elemento y luego retornamos otra funcion con las clases
// Función para añadir y quitar clases de elementos.
 export const toogle = elemento => (removeClass, addClass) => {
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
};

export const toggleClass = (element, toggleClass) => {
    element.classList.toggle(toggleClass);
};

//Añadimos y quitamos loader con class
const loader = document.querySelector('#loader');
export const renderLoader = toogle(loader);

// mostrar u ocultar comentarios
const detailSection = document.querySelector('#detailSection');
export const showQuotesForm = () => detailSection.style.display ='block';
export const hideQuotesForm = () => detailSection.style.display = 'none';

//forma 2
 //export const handleQuotesForm = diplay => detailSection.style.display=diplay;