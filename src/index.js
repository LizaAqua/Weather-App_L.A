function refreshWeather (response){
    let temperatureElement= document.querySelector ("#temperature");
    temperatureElement.innerHTMl=response.data

}


function searchCity(city) {
  let apiKey="abfec4b8be01abt65a50c3e50o5aa3d7"
  let apiURL=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(refreshWeather);

}



function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput= document.querySelector("#search-form-input");
    let cityELement= document.querySelector ("#city");
cityELement.innerHTML= searchInput.value;
searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);