import { renderShowsDOM } from './shows.js'
import  renderDetail from './detail.js';
import { showFilter, hideFilter } from './navbar.js';

page('/',()=> {
    console.log('home page');
    showFilter() // aparece buscador
    renderShowsDOM();
});
page('/detail/:id', ctx => {
    console.log('Detalle');
    //para conseguir los params que contiene ctx de la llamada
    const { params: { id } } = ctx;
    console.log(id);
    hideFilter() // quita buscador
    renderDetail(id);
});
page();
