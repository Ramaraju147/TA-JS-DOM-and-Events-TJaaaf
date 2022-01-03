let cardList = document.querySelector(".card-list");
let buttons = document.querySelector(".buttons");
let input = document.querySelector("input");
let allButtons = document.querySelectorAll("button")

input.addEventListener("input",handleInput);

buttons.addEventListener("click",handleEvent);

function handleInput(){
  removeActive()
  let searchData = {houses:[]}
  got.houses.forEach( house => {
    searchData.houses.push({
      name: house.name,
      wikiLink: house.wikiLink,
      people: house.people.filter(people => people.name.toLowerCase().includes(event.target.value))
    })
  })
  createUI(searchData);
}

function removeActive(){
  allButtons.forEach(button => button.classList.remove("active"))
}

function handleEvent(event){
  if(event.target.dataset.name){
  let houseData = {}
  removeActive();
  event.target.classList.add("active");
  let houseName = event.target.dataset.name;
  houseData.houses = filterData(houseName);
  createUI(houseData);
  }
}

function filterData(houseName){
  let filteredData = got.houses.filter(house => house.name === houseName)
  return filteredData;
}

function createUI(data=got){
  cardList.innerHTML = "";
  let ul = document.createElement("ul");
  data.houses.forEach((house) => {
    house.people.forEach((people) => {
      let li = document.createElement("li");
      li.classList.add("card");
      let img = document.createElement("img");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let btn = document.createElement("button");
      let a = document.createElement("a");
      a.setAttribute("href",people.wikiLink);
      a.innerText = "Know More!"
      img.setAttribute("src",people.image);
      h2.innerText = people.name;
      p.innerText = people.description;
      btn.append(a);
      li.append(img,h2,p,btn);
      ul.append(li);
    })
  })
  cardList.append(ul);
}

createUI();
