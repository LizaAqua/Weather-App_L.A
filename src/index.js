function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput= document.querySelector("#search-form-input");
console.log(searchInput.Value);
}


let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);