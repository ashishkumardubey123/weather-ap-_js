const form = document.querySelector("form");
const search = document.querySelector("#search");

let key = `b085b780d05e68687a9a2f014d208688`

const Weather = document.querySelector("#weather");

const Getweather = async (city) => {
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "1401b6dc51mshd5b6215c59cb105p1ce2c0jsn9ad3f24a4ad5",
  //     "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  //   },
  // };

  const response = await fetch(Url);

  let data = await response.json();
  console.log(data);

  let Fahrenheit = (data.main.temp - 273.15)

  return showWeather(Fahrenheit, data);
};

let showWeather = (Fahrenheit, data) => {
  Weather.innerHTML = ` <div>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                </div>
                <div>
                    <h2> ${Fahrenheit.toFixed(0, 4)} ℃</h2>
                    <h4> ${data.weather[0].main}</h4>
                </div>`;
};

form.addEventListener("submit", (event) => {
  Getweather(search.value);
  event.preventDefault();
});
