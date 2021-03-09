const query = location.search.substring(1);
const searchText = query.replaceAll("%20", " ");
const key = "9a82bba66428019f581ebff5d7635c9c";
const id = "4b353692";

let hits;

const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${searchText}&app_id=${id}&app_key=${key}`);
    const data = await response.json();
    hits = data.hits;
    console.log(hits);
}

const firstLoad = () => {
    getRecipe();
}

window.onload = firstLoad();