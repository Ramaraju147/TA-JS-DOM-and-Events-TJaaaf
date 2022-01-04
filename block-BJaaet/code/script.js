let input = document.querySelector("input");
let movieList = document.querySelector(".movie-list")

input.addEventListener("keyup",handleEvent);
movieList.addEventListener("click",handleCross);

function handleCross(){
  let parentElm = event.target.parentElement;
  parentElm.remove();
}

function handleEvent(){
  if(event.target.value && event.keyCode==13){
    let html = `
    <li>
    <p>${event.target.value}</p>
    <i class="far fa-times-circle cross"></i>
    </li>
    `
    movieList.innerHTML+=html
    event.target.value=""
  }
  
}