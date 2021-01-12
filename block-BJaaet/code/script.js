const input = document.querySelector("input");
const movie_list = document.querySelector(".movie-list");

input.addEventListener("keyup", handleEvent);
movie_list.addEventListener("click", handleClick);

function handleClick(e) {
  if (
    e.target.dataset.name === "icon" && e.target.parentElement
      ? e.target.parentElement.previousSibling.previousSibling.checked
      : false
  ) {
    e.target.parentElement.parentElement.remove();
  }
}

function handleEvent(e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const input = document.createElement("input");
    span.innerHTML = '<i class="fas fa-times-circle" data-name="icon"></i>';
    input.setAttribute("type", "checkbox");
    p.innerText = e.target.value;
    li.append(input);
    li.append(p);
    li.append(span);
    movie_list.append(li);
    e.target.value = "";
  }
}
