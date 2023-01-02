let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
console.log(day);

let hours = [now.getHours()];
let minuites = [now.getMinutes()];
if (minuites < 10) {
  minuites = `0${minuites}`;
}
let time = hours + ":" + minuites;
console.log(time);
let curr_time = `${day}, ${time}`;
console.log(curr_time);

let now_t = document.querySelector("div .current_time");
console.log(now_t);
now_t.innerHTML = curr_time;
let now_rtd = document.querySelector("div .r_time");
console.log(now_rtd);
now_rtd.innerHTML = time;

/*function location(event) {
  event.preventDefault();
  let l_loc = document.querySelector(" #search");
  let loc_s = document.querySelector("div .curr_loc");
  loc_s.innerHTML = l_loc.value;
}
let cur_loc = document.querySelector("#loc");
cur_loc.addEventListener("submit", location);

function location_up(event) {
  event.preventDefault();
  let l_locs = document.querySelector(" #search");
  let loc_up = document.querySelector("div .ll");
  loc_up.innerHTML = l_locs.value;
}
let cur_lloc = document.querySelector("#loc");
cur_lloc.addEventListener("submit", location_up);

function hlink(event) {
  event.preventDefault();
  let f_link = document.querySelector("#fahrenheit-link");
  let ff_link = document.querySelector("#change");
  let fahrenheitTemperature = Math.round((response.data.main.temp * 9) / 5 + 32)
  ff_link.innerHTML = `fahrenheitTemperature`;
}

let link_ = document.querySelector("#fahrenheit-link");
link_.addEventListener("click", hlink);

function c_link(event) {
  event.preventDefault();
  let cc_link = document.querySelector("#celsius-link");
  let ccc_link = document.querySelector("#change");
  ccc_link.innerHTML = response.data.main.temp;
}
let linkc_ = document.querySelector("#celsius-link");
linkc_.addEventListener("click", c_link);*/

function curlocation(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let apiKey = "5fdeda3e32d8069764f0c24fbed131a7";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiURL).then(temp);
}

function temp(response) {
  console.log(response.data.main.temp);
  let loc_d = document.querySelector("div .curr_loc");
  let loc_p = document.querySelector("div .ll");
  loc_d.innerHTML = response.data.name;
  loc_p.innerHTML = response.data.name;
  let temp_r = document.querySelector("#change");
  temp_r.innerHTML = Math.round(response.data.main.temp);
  let hum = document.querySelector("#hum");
  hum.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
  let pres = document.querySelector("#pre");
  pres.innerHTML = `Pressure: ${response.data.main.pressure} Pa`;
  let desc = document.querySelector("#des");
  desc.innerHTML = response.data.weather[0].main;
  function hlink(event) {
    event.preventDefault();
    let f_link = document.querySelector("#fahrenheit-link");
    let ff_link = document.querySelector("#change");
    let fahrenheitTemperature = Math.round(
      (response.data.main.temp * 9) / 5 + 32
    );
    ff_link.innerHTML = fahrenheitTemperature;
  }

  let link_ = document.querySelector("#fahrenheit-link");
  link_.addEventListener("click", hlink);

  function c_link(event) {
    event.preventDefault();
    let cc_link = document.querySelector("#celsius-link");
    let ccc_link = document.querySelector("#change");
    ccc_link.innerHTML = Math.round(response.data.main.temp);
  }
  let linkc_ = document.querySelector("#celsius-link");
  linkc_.addEventListener("click", c_link);
}

function location_geo(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(curlocation);
}
function location(event) {
  event.preventDefault();
  let l_loc = document.querySelector(" #search");
  let loc_s = document.querySelector("div .curr_loc");
  loc_s.innerHTML = l_loc.value;
  let loc_up = document.querySelector("div .ll");
  loc_up.innerHTML = l_loc.value;

  let city = l_loc.value;
  let apiKey = "5fdeda3e32d8069764f0c24fbed131a7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(temp);
}

let button_g = document.querySelector("#geol");
button_g.addEventListener("click", location_geo);

let cur_loc = document.querySelector("#loc");
cur_loc.addEventListener("submit", location);
