const Search = document.querySelector("#search");
const text = document.querySelector("#searchText");

Search.addEventListener('click', () => {
    console.log(text.value);
});

