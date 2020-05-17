
import api from './api.js';

const QUOTES_API = 'https://quotes-api-keepcoding.herokuapp.com/api/v1/';

const { createQuote} = api(QUOTES_API);

export const quoteTemplate = ({quote,date}) => `
    <div class="list-item">
        <p>${quote}</p>
        <span>${date}</span>
    </div>
`;

//const addQuoteListener = id => {
const quotesForm = document.querySelector('#quote-form');
const quotesInput = document.querySelector('#quote');
const quoteList = document.querySelector('#quoteList');

quotesForm.addEventListener('submit', async (evt) =>{
  evt.preventDefault();
  try{
    if(quotesInput.validity.valid){
      const id = window.location.pathname.split('/detail/')[1];
      const response = await createQuote(id,quotesInput.value);
      quoteList.innerHTML += quoteTemplate(response);
      quotesInput.value = '';
    } else {
    //funcion!!!!
    }
  }catch(err){
    console.err(err);
  }
});

//};

//export default addQuoteListener;

