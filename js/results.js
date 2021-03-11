const query = location.search.substring(1);
const searchText = query.replaceAll("%20", " ");
const key = "9a82bba66428019f581ebff5d7635c9c";
const id = "4b353692";

let activeRecipes;

const recipeContainer = document.getElementById("recipe-container");

const searchBtn = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar")

let hits;
let code = "";

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
    hits.map(hit => injectCode(hit))
    recipeContainer.innerHTML = code;
    activeRecipes = document.querySelectorAll(".box")
    activeRecipes.forEach((button) => {
        button.onclick = () => {
          if(button.classList.contains("zoomed")){
              button.classList.remove("zoomed");
          }else{
              button.classList.add("zoomed");
          }
        }
      })
}

const searchMethod = () => {
    window.location.href = `./results.html?${searchBar.value}`;
}

const injectCode = (hit) => {
    code += `
    <div class="box">
        <div class="recipe">
            <span class="recipe-label">${hit.recipe.label}</span>
            <img src="${hit.recipe.image}"></img>
            <ul>
                ${hit.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`)}
            </ul>
        </div>
    </div>
    `;
}

searchBtn.addEventListener("click", searchMethod);

window.onload = firstLoad();