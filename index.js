let date = document.querySelector("#date");

let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let dayToday = currentDate.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

date.innerHTML = `${days[dayToday]} ${hours}:${minutes}`;

if (hours < 10) {
  hours = `0${hours}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

function searching(event) {
  event.preventDefault();
  let city = document.querySelector("h1");
  let selectedCity = document.querySelector("#selected-city");
  city.innerHTML = selectedCity.value;
}
function showTemperature(response) {
  let city = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  city.innerHTML = response.data.name;
  temperatureElement.innerHTML = response.data.main.temp;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "4b3503b2f08a729413c4d33ef1186004";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
