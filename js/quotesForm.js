
import api from './api.js';

const QUOTES_API = "https://quotes-api-keepcoding.herokuapp.com/api/v1/";

const { createQuote} = api(QUOTES_API);

const addQuoteListener = id => {
console.log('quote');
const quotesForm = document.querySelector('#quote-form');
const quotesInput = document.querySelector('#quote');

quotesForm.addEventListener('submit', async (evt) =>{
    evt.preventDefault();
    try{
        if(quotesInput.validity.valid){
         //const id = window.location.pathname.split('/detail/')[1];
         await createQuote(id,quotesInput.value);
        } else {
            //funcion!!!!
        }
    }catch(err){
        console.err(err);
    }
});

};

export default addQuoteListener;

