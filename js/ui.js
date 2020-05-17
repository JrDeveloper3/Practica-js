
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
export const showQuotesForm = () => detailSection.innerHTML = `<div id="detail" class="detail-content"></div>
<div class="quotes-list">
  <h2>Quotes</h2>
  <div id="quoteList">
  </div>
</div>
<form id="quote-form" class="quote-form" novalidate>
  <div class="quote-input">
    <label for="quote">Quote of this show</label>
    <input required id="quote" placeholder="Add your quote" class="input primary" type="text">
  </div>
  <button type="submit" class="button primary">Add quote</button>
</form>`;
export const hideQuotesForm = () => detailSection.innerHTML = '';

//forma 2
//export const handleQuotesForm = diplay => detailSection.style.display=diplay;