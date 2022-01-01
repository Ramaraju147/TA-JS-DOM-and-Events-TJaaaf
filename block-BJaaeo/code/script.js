let screen = document.querySelector(".screen");
let nums = document.querySelectorAll(".num,.op")
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");

clear.addEventListener("click",clearHandler);

equal.addEventListener("click",resultHandler);

nums.forEach(num => {
  num.addEventListener("click",numberHandler);
})

function clearHandler(){
  screen.innerText="";
}

function resultHandler(){
  let result = eval(screen.innerText);
  screen.innerText = result;
}

function numberHandler(event){
  screen.innerText += event.target.dataset.num || event.target.dataset.op
}