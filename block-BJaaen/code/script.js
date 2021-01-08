const player_icons = document.querySelector(".player-1");
const player_selection = document.querySelector(".selected-1");
const computer_selection = document.querySelector(".selected-2");
const com_icons = document.querySelector(".player-2");
const com = document.querySelectorAll(".com");
const i = document.querySelectorAll("i");
const resetBtn = document.querySelector(".reset");
const result = document.querySelector(".result");
const player_1_count = document.querySelector(".Player-1-count");
const computer_count = document.querySelector(".computer-count");
let player, computer;

player_icons.addEventListener("click", handleEvent);
resetBtn.addEventListener("click", resetAll);

function handleEvent(e) {
  player = "---" + e.target.attributes["data-name"].value;
  player_selection.innerHTML = player;
  resetAll();
  e.target.style.color = "blue";
  randomComputerSelector();
  winner();
}

function winner() {
  if (
    (player_selection.innerHTML == "---Rock" &&
      computer_selection.innerHTML == "---Paper") ||
    (player_selection.innerHTML == "---Paper" &&
      computer_selection.innerHTML == "---Scissors") ||
    (player_selection.innerHTML == "---Scissors" &&
      computer_selection.innerHTML == "---Rock")
  ) {
    result.innerHTML = "You Lost!";
    computer_count.innerText = Number(computer_count.innerText) + 1;
  } else if (
    (player_selection.innerHTML == "---Rock" &&
      computer_selection.innerHTML == "---Rock") ||
    (player_selection.innerHTML == "---Paper" &&
      computer_selection.innerHTML == "---Paper") ||
    (player_selection.innerHTML == "---Scissors" &&
      computer_selection.innerHTML == "---Scissors")
  ) {
    result.innerHTML = "It's a Tie!";
  } else {
    result.innerHTML = "You Won!";
    player_1_count.innerText = Number(player_1_count.innerText) + 1;
  }
}

function resetAll(e) {
  console.log(e);
  if (e ? (e.target = resetBtn) : false) {
    player_selection.innerHTML = "";
    computer_selection.innerHTML = "";
    player_1_count.innerText = 0;
    computer_count.innerHTML = 0;
    result.innerHTML = "";
  }
  i.forEach((x) => (x.style.color = "black"));
}

function randomComputerSelector() {
  let random = Math.floor(Math.random() * 3);
  let ele = com[random];
  ele.style.color = "red";
  computer_selection.innerHTML = "---" + ele.dataset["name"];
}
