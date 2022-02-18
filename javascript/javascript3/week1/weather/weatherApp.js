console.log("hej module");
const conferfmBtn = document.querySelector("#confirm-city");
const cityInput = document.querySelector("#city-name");
const body = document.querySelector("body");
let cityName;
let nameOfCity = document.createElement("p");
let temprature = document.createElement("p");
let icon = document.createElement("p");
let windSpeed = document.createElement("p");
let clouds = document.createElement("p");
let warningParagraph = document.createElement("p");
let sunRiseAndSet = document.createElement("p");

conferfmBtn.addEventListener("click", () => {
  if (cityInput.value == "") {
    warningParagraph.innerHTML = "Please enter a city name";
    body.appendChild(warningParagraph);
  } else {
    async function weatherApp() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=33eb251a59e70a4762c2ce771ec0f0ec`
      );
      const data = await response.json();
      console.log(data);

      nameOfCity.innerHTML = data.name;
      body.appendChild(nameOfCity);

      temprature.innerHTML = `Temprature is= max ${data.main.temp_max}, min ${data.main.temp_min}, and it feels like ${data.main.feels_like}`;
      body.appendChild(temprature);

      icon.innerHTML = `icon is ${data.weather[0].icon}`;
      body.appendChild(icon);

      windSpeed.innerHTML = `Wind Speed is ${data.wind.speed}`;
      body.appendChild(windSpeed);

      clouds.innerHTML = `clouds status is ${data.weather[0].description}`;
      body.appendChild(clouds);

      sunRiseAndSet.innerHTML = `Sun rises at ${data.sys.sunrise} and it sets at ${data.sys.sunset} `;
      body.appendChild(sunRiseAndSet);
    }
    weatherApp();
    cityInput.value = "";
  }
});
cityInput.addEventListener("click", () => {
  nameOfCity.innerHTML = "";
  sunRiseAndSet.innerHTML = "";
  warningParagraph.innerHTML = "";
  clouds.innerHTML = "";
  windSpeed.innerHTML = "";
  icon.innerHTML = "";
  temprature.innerHTML = "";
});
