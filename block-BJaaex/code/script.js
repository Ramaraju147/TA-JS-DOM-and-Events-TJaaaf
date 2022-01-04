// Card data
const cardsArray = [
  {
    name: 'egg',
    img: '<i class="fas fa-egg"></i>',
  },
  {
    name: 'star',
    img: '<i class="fas fa-star"></i>',
  },
  {
    name: 'bomb',
    img: '<i class="fas fa-bomb"></i>',
  },
  {
    name: 'bong',
    img: '<i class="fas fa-bong"></i>',
  },
  {
    name: 'luguage',
    img: '<i class="fas fa-luggage-cart"></i>',
  },
  {
    name: 'volleyball',
    img: '<i class="fas fa-volleyball-ball"></i>',
  },
  {
    name: 'snowplow',
    img: '<i class="fas fa-snowplow"></i>',
  },
  {
    name: 'napster',
    img: '<i class="fab fa-napster"></i>',
  }
]

let seconds = 0;
let interval;
let gameGrid = cardsArray.concat(cardsArray)
gameGrid.sort((a,b) => (0.5 - Math.random()))

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

let attempts = document.querySelector(".attempts");
const game = document.getElementById("game");
const grid = document.createElement("section");
let time = document.querySelector(".time");
let guesses = 0;
grid.setAttribute("class","grid");

game.appendChild(grid);

gameGrid.forEach(item => {
  const card = document.createElement("div");

  card.classList.add("card");

  card.dataset.name = item.name;

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");

  back.innerHTML = item.img;

  card.append(front,back);
  grid.appendChild(card)
})

grid.addEventListener("click",function(event){
  let clicked = event.target;
  console.log(event.target.parentNode)
  if(clicked.nodeName === "SECTION" || clicked === previousTarget || clicked.parentNode.classList.contains("selected") ){
    return
  }
  if(count<2){
    count++
    if(count === 1){
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected") 
    }else{
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected") 
    }

    if(firstGuess!=="" && secondGuess !== ""){
      if(firstGuess === secondGuess){
        setTimeout(match,delay)
        setTimeout(resetGuesses,delay)
      }else{
        setTimeout(resetGuesses,delay)
      }
    }
  }
  previousTarget = clicked;
})

const match = () => {
  let selected = document.querySelectorAll(".selected");
  let cards = document.querySelectorAll(".card");
  selected.forEach((card) => {card.classList.add("match")});
  let allMatched = [...cards].every(card => card.classList.contains("match"));
  if(allMatched){
    stopTimer()
  }
}

const resetGuesses = () => {
  firstGuess="";
  secondGuess="";
  count = 0;
  guesses++;
  attempts.innerHTML = guesses;
  let selected = document.querySelectorAll(".selected");
  selected.forEach((card) => card.classList.remove("selected"))
}

const startTimer = () => {
  interval = setInterval(showTime,1000)
}

const stopTimer = () => {
  clearInterval(interval);
}

const showTime = () => {
  seconds +=1;
  time.innerHTML = hhmmss(seconds);
}

const hhmmss = (timeInSeconds) => {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds = timeInSeconds - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, '0');
  minutes = `${minutes}`.padStart(2, '0');
  seconds = `${seconds}`.padStart(2, '0');

  return hours + ':' + minutes + ':' + seconds;
}

startTimer();
