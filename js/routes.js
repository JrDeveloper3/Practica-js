import { renderShowsDOM } from './shows.js';
import  renderDetail from './detail.js';
import { showFilter, hideFilter } from './navbar.js';
import { showQuotesForm, hideQuotesForm } from './ui.js';
import  addQuoteListener  from './quotesForm.js';
const page = page();
page('/',()=> {
  console.log('home page');
  showFilter(); // aparece buscador
  hideQuotesForm();
  renderShowsDOM();
});
page('/detail/:id', ctx => {
    
  //para conseguir los params que contiene ctx de la llamada
  const { params: { id } } = ctx;
  hideFilter(); // quita buscador
  showQuotesForm();
  renderDetail(id);
  addQuoteListener(id);
});
page();
