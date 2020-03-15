import { renderShowsDOM } from './shows.js'
import  renderDetail from './detail.js';
import { handleNavbar } from './navbar.js';

page('/',()=> {
    console.log('home page');
    handleNavbar('no-filter', 'filter') // aparece buscador
    renderShowsDOM();
});
page('/detail/:id', ctx => {
    console.log('Detalle');
    const { params: { id } } = ctx;
    console.log(id);
    handleNavbar('filter', 'no-filter') // quita buscador
    renderDetail();
});
page();
