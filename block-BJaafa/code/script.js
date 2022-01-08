const settings = document.querySelector(".settings");
const pop_up = document.querySelector(".pop-up");
const city = document.querySelector(".city")
const date = document.querySelector(".date");
let tempSelection = document.querySelector('input[name="scale"]:checked').value;
const currentTemp = document.querySelector(".current-temp");
const currentClimate = document.querySelector(".current-climate")
const currentIcon = document.querySelector(".current-icon")
const highTemp = document.querySelector(".high-temp");
const lowTemp = document.querySelector(".low-temp");
const wind = document.querySelector(".wind");
const sunrise = document.querySelector(".sunrise")
const humidity = document.querySelector(".humidity")
const sunset = document.querySelector(".sunset")
const cards = document.querySelector(".cards")
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const allInput = document.querySelectorAll("input[type='radio']")

allInput.forEach((input) => {
  input.addEventListener("input", ()=>{
    tempSelection = document.querySelector('input[name="scale"]:checked').value;
    main()
  })
})

const weatherIcons = [
  {
    name:"Thunderstorm",
    icon:`<i class="fas fa-poo-storm"></i>`
  },
  {
    name:"Drizzle",
    icon:`<i class="fas fa-cloud-rain"></i>`
  },
  {
    name:"Rain",
    icon:`<i class="fas fa-cloud-showers-heavy"></i>`
  },
  {
    name:"Snow",
    icon:`<i class="fas fa-snowflake"></i>`
  },
  {
    name:"Clear",
    icon:`<i class="fab fa-mixcloud"></i>`
  },
  {
    name:"Clouds",
    icon:`<i class="fas fa-cloud"></i>`
  }
]


function main(){
  settings.addEventListener("click",()=> {
    pop_up.classList.toggle("hidden")
  })
  $.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
      city.innerHTML = `${location.city}, ${location.country_code}`;
      weatherData = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely,hourly&appid=eb7694a0b7349579e404ebd37478b13f&units=imperial`)
      .then(res => res.json())
      .then(data => weather(data) )

    }
  });
  function weather(data){
    let weatherData = data
    let presentTemp = weatherData.current.temp
    let presentClimate = weatherData.current.weather[0].main;
    let firstDayData = weatherData.daily[0];
    let nextFiveDaysData = weatherData.daily.slice(1,6)
    currentWeather(firstDayData,presentTemp,presentClimate)

    nextfiveDaysWeather(nextFiveDaysData);
  }

  function currentWeather(data,temp,climate){
    let event = new Date(data.dt*1000)
    let sunriseTime = new Date(data.sunrise*1000)
    let sunsetTime = new Date(data.sunset*1000)
    date.innerHTML = event.toDateString()
    currentTemp.innerHTML = tempConvertor(temp);
    currentClimate.innerHTML = climate;
    weatherIcons.forEach(i => {
      if(i.name === climate){
        currentIcon.innerHTML = i.icon
      }
    })
    highTemp.innerHTML = tempConvertor(data.temp.max)
    lowTemp.innerHTML = tempConvertor(data.temp.min)
    wind.innerHTML = `${data.wind_speed} mps`;
    sunrise.innerHTML = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`
    sunset.innerHTML = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`
    humidity.innerHTML = `${data.humidity}%`
  }

  function tempConvertor(temp){
   celsiusTemp = `${((5/9) * (Number(temp)- 32)).toFixed(0)}°C`
   fahrenheitTemp = `${temp.toFixed(0)}°F`
   return tempSelection === "celsius"?celsiusTemp:fahrenheitTemp
  }

  function nextfiveDaysWeather(data){
    cards.innerHTML = ""
    data.forEach(d => {
      let date = new Date(d.dt*1000)
      let icon = ""
      weatherIcons.forEach(i => {
        if(i.name === d.weather[0].main){
          icon = i.icon
        }
      })
      let html = `<div class="card flex">
      <div class="card-col">
        <h5>${days[date.getDay()]}</h5>
        <p>${date.getMonth()+1}/${date.getDate()}</p>
      </div>
      ${icon}
      <div class="card-col">
        <h5>${tempConvertor(d.temp.min)}</h5>
        <p>Low</p>
      </div>
      <div class="card-col">
       <h5>${tempConvertor(d.temp.max)}</h5>
       <p>High</p>
     </div>
     <div class="card-col">
       <h5>${d.wind_speed}mps</h5>
       <p>Wind</p>
     </div>
    </div>`
    console.log(html)
    cards.innerHTML+=html;
    })

  }

}

main();