import {toogle} from './ui.js';
import { renderShowsDOM } from './shows.js';
import storage from './storage.js';

const {setItem, getItem} = storage();
const navbar = document.querySelector('#navbar');
const searchIcon = document.querySelector('#navbar-search');
const closeIcon = document.querySelector('#navbar-close');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#navbar .input.search');
// para qeu el storage spsrezca en el buscador
//searchInput.value = getItem('navbar-input');

const handleNavbar = toogle(navbar);

searchIcon.addEventListener('click', () => {
    handleNavbar('no-search', 'search');
});

closeIcon.addEventListener('click', () => {
    handleNavbar('search', 'no-search');
});

searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(searchInput.validity.valid){
        //render shows
        setItem('navbar-input', searchInput.value);
       renderShowsDOM(searchInput.value);
    } else {
        renderShowsDOM();
    }
});

const hideFilter = () => handleNavbar('filter', 'no-filter'); //oculta el filtro
const showFilter = () => handleNavbar('no-filter', 'filter'); //muestra el filtro

export {hideFilter, showFilter};