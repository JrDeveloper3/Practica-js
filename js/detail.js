import api from './api.js';

const {getShowDetail} = api();

const detailTemplate = ({name,image,id,summary}) =>`
    <div class="detail-section>
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

const renderDetail = async id => {
    try{
        const selector = document.querySelector('main');
        // de la llamada recibiremos un show
        const show = await getShowDetail(id);
        selector.innerHTML = detailTemplate(show);
    } catch(err){
        console.error(err);
    }
  
};

export default renderDetail;