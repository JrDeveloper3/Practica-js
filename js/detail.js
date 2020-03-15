
const detailTemplate =`
    <h1>Detalle</h1>
`;

const renderDetail = () => {
    const selector = document.querySelector('main');
    selector.innerHTML = detailTemplate;
};

export default renderDetail;