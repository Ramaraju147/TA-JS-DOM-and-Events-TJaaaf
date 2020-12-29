const box1 = document.querySelector(".first");
const box2 = document.querySelector(".second");

box1.addEventListener("click", setRandomColor);
box2.addEventListener("mousemove", setRandomColor);

function setRandomColor() {
  this.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
