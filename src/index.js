function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityELement= document.querySelector ("#city");
    let descriptionELement= document.querySelector ("#description");

    console.log(response.data.condition.description);
    cityELement.innerHTML= response.data.city;
    descriptionELement.innerHTML=response.data.condition.description;

    temperatureElement.innerHTML= Math.round(temperature);


}


function searchCity(city) {
  let apiKey="abfec4b8be01abt65a50c3e50o5aa3d7"
  let apiURL=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(refreshWeather);

}



function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput= document.querySelector("#search-form-input");
    
searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");