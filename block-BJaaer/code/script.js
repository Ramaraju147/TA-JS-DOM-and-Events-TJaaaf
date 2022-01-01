let form = document.querySelector("form");
let result = document.querySelector(".result");

form.addEventListener("submit",()=>{
  event.preventDefault();
  let name = form.elements.name.value;
  let email = form.elements.email.value;
  let favorite = form.elements.favorite.value;
  let color = form.elements.color.value;
  let rating = form.elements.rating.value;
  let genre = form.elements.genre.value;
  let terms = form.elements.terms.checked;

  let html = `
  <div class="padding">
  <a href="./index.html" class="right-align">Close</a>
  <h1>Hello ${name}</h1>
  <p>Email: ${email}</p>
  <p>You Love: ${favorite}</p>
  <p>Color: ${color}</p>
  <p>Rating: ${rating}</p>
  <p>Book Genre: ${genre}</p>
  <p>You ${terms?"agree":"disagree"} to Terms and Conditions</p>
  </div>
  `
  result.classList.remove("hidden");
  form.classList.add("hidden")
  result.innerHTML = html;
})