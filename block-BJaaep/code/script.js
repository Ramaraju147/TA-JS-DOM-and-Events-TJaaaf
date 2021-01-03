let boxes = document.querySelector(".box-2");
let parentBox = document.querySelector(".box-1");
let childBoxes = parentBox.querySelectorAll(".box");

childBoxes.forEach((b) =>
  b.addEventListener("click", function () {
    eventHandler(event);
  })
);

boxes.addEventListener("click", function () {
  eventHandler(event);
});

function eventHandler(e) {
  e.target.innerText = e.target.innerText ? "" : "1";
}
