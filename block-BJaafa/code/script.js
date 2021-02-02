const weather = [
  {
    name: "Thunderstorm",
    img: '<i class="fas fa-poo-storm"></i>',
  },
  {
    name: "Drizzle",
    img: '<i class="fas fa-cloud-rain"></i>',
  },
  {
    name: "Rain",
    img: '<i class="fas fa-cloud-showers-heavy"></i>',
  },
  {
    name: "	Snow",
    img: '<i class="fas fa-snowflake"></i>',
  },
  {
    name: "Clear",
    img: '<i class="fas fa-sun"></i>',
  },
  {
    name: "Clouds",
    img: '<i class="fas fa-cloud"></i>',
  },
];

var weatherdata;

fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly,alerts&appid=eb7694a0b7349579e404ebd37478b13f"
)
  .then((response) => response.json())
  .then((data) => (weatherdata = data))
  .then(console.log);

console.log(weatherdata);

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var message = "";
  if (hour > 4 && hour < 12) {
    message = "Good Morning Raju";
  } else if (hour > 12 && hour < 16) {
    message = "Good Afternoon Raju";
  } else if (hour > 16 && hour < 20) {
    message = "Good Evening Raju";
  } else {
    message = "Good Night Raju";
  }
  document.querySelector(".heading").innerHTML = message;
  hour = updateTime(hour);
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  min = updateTime(min);
  sec = updateTime(sec);
  var midday = "AM";
  midday = hour >= 12 ? "PM" : "AM";
  document.querySelector(".time").innerHTML =
    hour + " : " + min + " : " + sec + " " + midday;
  setTimeout(function () {
    currentTime();
  }, 1000);
}

function weatherUi(weatherdata) {
  console.log(weatherdata);
  const div = document.createElement("div");
  const currentdata = weatherdata.current.weather.main;
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h3");
  const span = document.createElement("span");
  weather.filter((w) => {
    if (w.name === currentdata) {
      span.innerHTML = w.img;
    }
  });
  h1.innerHTML = "Today";
  h2.innerHTML = weatherdata.current.temp;
  div.append(span, h1, h2);
  document.querySelector(".weather").append(div);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

weatherUi(weatherdata);

currentTime();

console.log(weatherdata);
