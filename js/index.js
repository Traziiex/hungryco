const searchBtn = document.querySelector("a#search-button");
const searchBar = document.getElementById("search-bar")



const searchMethod = () => {
    window.location.href = `./results.html?${searchBar.value}`;
}

searchBtn.addEventListener("click", searchMethod);