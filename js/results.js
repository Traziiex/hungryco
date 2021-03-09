const query = location.search.substring(1);
const searchText = query.replaceAll("%20", " ");
const key = "9a82bba66428019f581ebff5d7635c9c";
const id = "4b353692";

const searchBtn = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar")

let hits;

const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${searchText}&app_id=${id}&app_key=${key}`);
    const data = await response.json();
    hits = data.hits;
    console.log(hits);
    await displayResults();
}

const firstLoad = () => {
    getRecipe();
}

const displayResults = () => {
    hits.map(hit => console.log(hit.recipe.label))
}

const searchMethod = () => {
    window.location.href = `./results.html?${searchBar.value}`;
}

searchBtn.addEventListener("click", searchMethod);

window.onload = firstLoad();