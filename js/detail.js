import api from './api.js';
import {renderQuotes} from './quotes.js'

const {getShowDetail} = api();

const detailTemplate = ({name,image,id,summary}) =>`
        <div class="detail-section">
            <header id="${id}">
                <div class="title-section">
                    <h1>${name}</h1>
                </div>
                <div class="image-container">
                    <img src="${ image ? image.medium : "../img/defaul.png"}">
                </div>
            </header>
            <div class="content">
            ${summary}
            </div>
        </div>

`;

// Promis.all() recibe una array de promesas que las ejecutara todas a la vez y acabara 
// cuando termine la promesa mas larga, la funciones no deben depender entre ella para lanzarse
//Promise.all devuelve un array con lo que devuelve cada promesa


const renderDetail = async id => {
    try{
        const selector = document.querySelector('main');
        // de la llamada recibiremos un show -> Sustituido pr Promise.all
        //const show = await getShowDetail(id); -> Sustituido pr Promise.all
        // Con el destructuring conseguimos el valor de la posición 1 de la array
        // el show se queda con el valor de la primera promise(getShowDetail).
        const [show] = await Promise.all([getShowDetail(id), renderQuotes(id)]);
        //renderQuotes(id); -> Sustituido por Promise.all
        selector.innerHTML = detailTemplate(show);
    } catch(err){
        console.error(err);
    }
  
};

export default renderDetail;