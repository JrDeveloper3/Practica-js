import { renderShowsDOM } from './shows.js'
import  renderDetail from './detail.js';
import { showFilter, hideFilter } from './navbar.js';
import { showQuotesForm, hideQuotesForm } from './ui.js';

page('/',()=> {
    console.log('home page');
    showFilter() // aparece buscador
    hideQuotesForm();
    renderShowsDOM();
});
page('/detail/:id', ctx => {
    console.log('Detalle');
    //para conseguir los params que contiene ctx de la llamada
    const { params: { id } } = ctx;
    console.log(id);
    hideFilter() // quita buscador
    showQuotesForm();
    renderDetail(id);
});
page();
