
// Recibimos un elemento y luego retornamos otra funcion con las clases
// Función para añadir y quitar clases de elementos.
 export const toogle = elemento => (removeClass, addClass) => {
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
};

export const toggleClass = (element, toggleClass) => {
    element.classList.toggle(toggleClass);
};

const loader = document.querySelector('#loader');

export const renderLoader = toogle(loader);