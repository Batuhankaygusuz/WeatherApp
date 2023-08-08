const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather.details");
const error404 = document.querySelector(".not-found");

//3711b590f4beb37746d0c7b06ddca606

search.addEventListener("click", () => {
  const APIKey = "3711b590f4beb37746d0c7b06ddca606";
  const city = document.querySelector(".search-box input").value;

  if (city == "") return;

  fetch(
    `https://www.api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod == "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");
    });
});
