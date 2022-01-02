let input = document.querySelector("input");
let todoList = document.querySelector(".todo-list");
let all = document.querySelector(".all");
let completed = document.querySelector(".completed");
let active = document.querySelector(".active");
let clear = document.querySelector(".clear");
let data = JSON.parse(localStorage.getItem("data")) || [];

input.addEventListener("keyup",handleEvent);

all.addEventListener("click",handleAll);

completed.addEventListener("click",handleCompleted);

active.addEventListener("click",handleActive);

clear.addEventListener("click",handleClear);

function handleClear(){
  data = data.filter(todo => !todo.isDone)
  createUI(data);
  localStorage.setItem("data", JSON.stringify(data));
}

function handleActive(){
  let activeData = data.filter(todo => !todo.isDone)
  createUI(activeData)
}

function handleCompleted(){
  let completedData = data.filter(todo => todo.isDone)
  createUI(completedData)
}

function handleAll(){
  createUI(data);
}

function handleEvent(){
if(event.keyCode === 13 && event.target.value !==""){
  let todo = {
    name: event.target.value,
    isDone: false
  }
  data.push(todo)
  localStorage.setItem("data", JSON.stringify(data));
  event.target.value=""
}
createUI()
}

function handleClick(){
let id = event.target.dataset.id;
data.splice(id,1);
localStorage.setItem("data", JSON.stringify(data));
createUI();
}

function handleInput(){
  let id = event.target.dataset.id;
  data[id].isDone = !data[id].isDone
  localStorage.setItem("data", JSON.stringify(data));
  createUI()
}

function createUI(todos=data){
  todoList.innerHTML=""
  todos.forEach((todo,index) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("data-id",index);
    input.checked = todo.isDone
    input.addEventListener("input",handleInput)
    let p = document.createElement("p");
    p.innerText=todo.name
    let span = document.createElement("span")
    span.innerHTML = `<i class="far fa-times-circle" data-id=${index}></i>`
    span.addEventListener("click",handleClick)
    console.log(li)
    li.append(input,p,span)
    todoList.append(li)
  })
}

createUI()