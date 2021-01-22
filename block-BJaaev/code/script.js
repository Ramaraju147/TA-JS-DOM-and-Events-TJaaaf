function main() {
  const todo_list = document.querySelector(".todo-list");
  const input = document.querySelector("input[type='text']");
  const active = document.querySelector(".active");
  const completed = document.querySelector(".completed");
  const all = document.querySelector(".all");
  const clear = document.querySelector(".clear");

  let input_value = JSON.parse(localStorage.getItem("todos")) || [];

  input.addEventListener("keyup", handleInput);

  all.addEventListener("click", handleAll);

  completed.addEventListener("click", handleCompleted);

  active.addEventListener("click", handleActive);

  clear.addEventListener("click", handleClear);

  createUI(input_value);

  function handleClear(e) {
    input_value = input_value.filter((e) => e.completed === false);
    console.log(input_value);
    createUI(input_value);
  }

  function handleActive(e) {
    let array = input_value.filter((e) => e.completed === false);
    createUI(array);
  }

  function handleCompleted(e) {
    let array = input_value.filter((e) => e.completed === true);
    createUI(array);
  }

  function handleAll(e) {
    createUI(input_value);
  }

  function handleInput(e) {
    if (e.keyCode === 13) {
      if (e.target.value.length) {
        input_value.push({
          todo: e.target.value,
          completed: false,
        });
        createUI(input_value);
      }
      e.target.value = "";
      localStorage.setItem("todos", JSON.stringify(input_value));
    }
  }

  function handleClick(e) {
    let id = e.target.dataset.id;
    input_value[id].completed = !input_value[id].completed;
    localStorage.setItem("todos", JSON.stringify(input_value));
    console.log(input_value);
  }

  function handleDelete(e) {
    let id = e.target.dataset.id;
    input_value.splice(id, 1);
    localStorage.setItem("todos", JSON.stringify(input_value));
    createUI(input_value);
  }

  function createUI(input_value) {
    console.log(input_value);
    todo_list.innerHTML = "";
    input_value.forEach((e, i) => {
      let li = document.createElement("li");
      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.dataset.id = i;
      input.checked = input_value[i].completed;
      input.addEventListener("click", handleClick);
      let p = document.createElement("p");
      p.innerText = e.todo;
      let span = document.createElement("span");
      span.innerHTML = "<i class='fas fa-times'></i>";
      span.addEventListener("click", handleDelete);
      li.append(input, p, span);
      todo_list.append(li);
    });
  }
}

main();
