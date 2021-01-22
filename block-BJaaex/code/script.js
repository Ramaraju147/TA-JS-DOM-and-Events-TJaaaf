// Card data
const cardsArray = [
  {
    name: "egg",
    img: '<i class="fas fa-egg"></i>',
  },
  {
    name: "star",
    img: '<i class="fas fa-star"></i>',
  },
  {
    name: "bobomb",
    img: '<i class="fas fa-bomb"></i>',
  },
  {
    name: "bong",
    img: '<i class="fas fa-bong"></i>',
  },
  {
    name: "joint",
    img: '<i class="fas fa-joint"></i>',
  },
  {
    name: "dove",
    img: '<i class="fas fa-dove"></i>',
  },
  {
    name: "volleyball",
    img: '<i class="fas fa-volleyball-ball"></i>',
  },
  {
    name: "kiss",
    img: '<i class="fas fa-kiss-beam"></i>',
  },
];

let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;
let delay = 1200;
let Count = 0;

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var myTimer = setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

// Grab the div with an id of root
const game = document.getElementById("game");
const end = document.querySelector(".end");

const divCount = document.getElementById("count");

// Create a section with a class of grid
const grid = document.createElement("section");
grid.setAttribute("class", "grid");

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the cardsArray array...
gameGrid.forEach((item) => {
  // Create a div
  const card = document.createElement("div");

  // Apply a card class to that div
  card.classList.add("card");

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name;

  // Create front of card
  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");
  back.innerHTML = item.img;
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

// Add event listener to grid
grid.addEventListener("click", function (event) {
  let clicked = event.target.parentElement;
  console.log(clicked);
  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected")
  ) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      // Assign first guess
      firstGuess = clicked.dataset.name;
      console.log(firstGuess);
      clicked.classList.add("selected");
    } else {
      // Assign second guess
      secondGuess = clicked.dataset.name;
      console.log(secondGuess);
      clicked.classList.add("selected");
      Count++;
      divCount.innerHTML = "";
      divCount.innerHTML = `Total Moves: ${Count}`;
    }
    // If both guesses are not empty...
    if (firstGuess !== "" && secondGuess !== "") {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        // run the match function
        console.log(firstGuess, secondGuess);
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    previousTarget = clicked;
  }
});

// Add match CSS
const match = () => {
  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
};

const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;
  if (grid.children.length == grid.querySelectorAll(".match").length) {
    clearInterval(myTimer);
    end.innerHTML = "Game Ended";
  }

  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.remove("selected");
  });
};
