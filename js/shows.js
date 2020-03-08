import {toggleClass} from './ui.js';
import api from './api.js';


const templateShow = ({name, summary, principal, image}) => ` 
    <div class="card ${principal ? 'principal' : 'secondary close'}">
    <header class="card-header">
      <h2>${name}</h2>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <img src="${ image ? image.medium : image}">
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

const renderShows = (element, shows) => {
    const htmlShows = shows.map(templateShow).join('')
    element.innerHTML = htmlShows;
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
   const mainSection = document.querySelector('main');
   const items = await getShows(text);
   renderShows(mainSection, items);
  } catch (err){
    console.error(err);
  }
};

renderShowsDOM();

export {renderShowsDOM};