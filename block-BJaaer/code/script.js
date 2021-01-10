const container = document.querySelector("form");
const form = document.querySelector(".form");
const result = document.querySelector(".result");

const details = {};

container.addEventListener("submit", (e) => {
  handleEvent(e);
});

function handleEvent(e) {
  e.preventDefault();
  details.name = container.elements.text.value;
  details.email = container.elements.email.value;
  details.gender = container.elements.gender.value;
  details.color = container.elements.color.value;
  details.range = container.elements.range.value;
  details.drone = container.elements.drone.value;
  details.terms = container.elements.terms.value;
  form.classList.add("hidden");
  let html = `
    <a href="./index.html">Close</a>
    <h1>Hello ${details.name}</h1>
    <p>Email: ${details.email}</p>
    <p>You Love:${details.gender}</p>
    <p>Color:${details.color}</p>
    <p>Rating:${details.range}</p>
    <p>Book Genre:${details.drone}</p>
    <p>You ${details.terms ? "agree" : "disagree"} to the terms</p>
     `;
  result.innerHTML = html;
  result.classList.remove("hidden");
}
