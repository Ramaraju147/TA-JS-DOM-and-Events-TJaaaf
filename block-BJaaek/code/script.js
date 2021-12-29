let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

box1.addEventListener("click",setRandomColor);
box2.addEventListener("mousemove",setRandomColor);

function setRandomColor(){
  this.style.backgroundColor = getRandomColor();
}

function getRandomColor(){
  let letters = "0123456789ABCDEF";
  let color = "#";
  for(let i=0;i<6;i++){
    color+= letters[Math.floor(Math.random()*16)]
  }
  return color;
}