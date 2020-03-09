import {toggleClass, renderLoader} from './ui.js';
import api from './api.js';


const templateShow = ({name, summary, principal, image}) => ` 
    <div class="card ${principal ? 'principal' : 'secondary close'}">
    <header class="card-header">
      <h2>${name}</h2>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <img src="${ image ? image.medium : "../img/defaul.png"}">
      </div>
      <div class="card-content-text">
        <p>${summary}
        </p>
        <div class="rating-container">
          <button class="icon">
            <i class="fas fa-star"></i>
          </button>
          <button class="icon">
            <i class="far fa-star"></i>
          </button>
          <button class="icon">
            <i class="far fa-star"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
//Manera más eficiente abrir cerrar tarjetas
// const mainSection = document.querySelector('main');
// mainSection.addEventListener("click", ev => {
//   // esto busca el elemento más cercano
//   const header = ev.srcElement.closest(".card-header");
//   if(header){
//     const show = header.parentElement;
//     if(!show.classList.contains('principal')){
//       toggleClass(show,'close');
//     }
//   }
// })


const renderShows = (element, shows) => {
    const htmlShows = shows.slice(0, 6).map( (show,index) =>{
      if(index <2){
        return templateShow({...show, principal:true})
      }
      return templateShow({...show, principal:false});
    }).join('')
    element.innerHTML = `
    <div class="show-section">
    ${htmlShows}
    </div>`;
    // Otra forma de abrir y cerrar tarjetas
    //despues de que se haya pintado para manejar los header
    const headers = document.querySelectorAll('.card.secondary .card-header');
    headers.forEach(header =>{
      const element = header.parentNode; //esto nos da el elemento anterior que es donde queremos cambiar la class
      header.addEventListener('click', evt => {
      toggleClass(element, 'close');  
      });
    });
};

const {getShows} = api();

const renderShowsDOM = async text => {
  try{
   renderLoader('hide','show');
   const mainSection = document.querySelector('main');
   const items = await getShows(text);
   renderShows(mainSection, items);
  } catch (err){
    console.error(err);
  } finally {
    renderLoader('show','hide');
  }
};

renderShowsDOM();

export {renderShowsDOM};