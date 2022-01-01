let reset = document.querySelector(".reset");
let userScore = document.querySelector(".user_score");
let computerScore = document.querySelector(".computer_score");
let userSelection = document.querySelector(".user_selection");
let computerSelection = document.querySelector(".computer_selection");
let result = document.querySelector(".result");
let userIcons = document.querySelectorAll(".user i")
let computerIcons = document.querySelectorAll(".computer i")
let allIcons = document.querySelectorAll("i")

reset.addEventListener("click", ()=>{
  userScore.innerText = 0;
  computerScore.innerText =0;
  userSelection.innerText="";
  computerSelection.innerText="";
  result.innerText="";
  allIcons.forEach(icon => icon.classList.remove("active"))
})

function winner(event,computerPick){
  let userData = event.target.dataset.name;
  let computerData = computerPick.dataset.name;
  if((userData == "scissors" && computerData == "paper") || (userData == "paper" && computerData == "rock") || (userData == "rock" && computerData == "scissors") ){
    result.innerText = "You Won!";
    userScore.innerText = Number(userScore.innerText) + 1;
    userSelection.innerText = `  ---${userData}`
    computerSelection.innerText = `  ---${computerData}`
  }else if((computerData == "scissors" && userData == "paper") || (computerData == "paper" && userData == "rock") || (computerData == "rock" && userData == "scissors") ){
    result.innerText = "Computer Won!";
    computerScore.innerText = Number(computerScore.innerText) + 1;
    userSelection.innerText = `  ---${userData}`
    computerSelection.innerText = `  ---${computerData}`
  }else{
    result.innerText = "It's a Tie!";
    userSelection.innerText = `  ---${userData}`
    computerSelection.innerText = `  ---${computerData}`
  }
  allIcons.forEach(icon => icon.classList.remove("active"))
  event.target.classList.add("active")
  computerPick.classList.add("active")

}

function userClick(){
  userIcons.forEach((icon) => {
    icon.addEventListener("click", (event)=> {
      computerClick(event);
    })
  })
}
userClick()

function computerClick(event){
  let randomPick = computerIcons[Math.floor(Math.random()*3)]
  winner(event,randomPick)
}