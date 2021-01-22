const cards = document.querySelector(".cards");
const input = document.querySelector("input");
const stark = document.querySelector(".stark");
const lannister = document.querySelector(".lannister");
const baratheon = document.querySelector(".baratheon");
const targaryen = document.querySelector(".targaryen");
const greyjoy = document.querySelector(".greyjoy");
const tyrell = document.querySelector(".tyrell");
const tully = document.querySelector(".tully");
const redwyne = document.querySelector(".redwyne");
const frey = document.querySelector(".frey");
const arryn = document.querySelector(".arryn");
const dothraki = document.querySelector(".dothraki");

let input_value = got.houses;

input.addEventListener("input", handleChange);
stark.addEventListener("click", (e) => handleEvent(e, "Starks"));
lannister.addEventListener("click", (e) => handleEvent(e, "Lannisters"));
baratheon.addEventListener("click", (e) => handleEvent(e, "Baratheons"));
targaryen.addEventListener("click", (e) => handleEvent(e, "Targaryens"));
greyjoy.addEventListener("click", (e) => handleEvent(e, "Greyjoys"));
tyrell.addEventListener("click", (e) => handleEvent(e, "Tyrells"));
tully.addEventListener("click", (e) => handleEvent(e, "Tullys"));
redwyne.addEventListener("click", (e) => handleEvent(e, "Redwyne"));
frey.addEventListener("click", (e) => handleEvent(e, "Freys"));
arryn.addEventListener("click", (e) => handleEvent(e, "Arryns"));
dothraki.addEventListener("click", (e) => handleEvent(e, "Dothrakis"));

function handleEvent(e, name) {
  handleButton(e);
  let arr = input_value.filter((i) => i.name === name);
  createUI(arr);
}

function handleButton(e) {
  stark.classList.remove("select");
  lannister.classList.remove("select");
  baratheon.classList.remove("select");
  targaryen.classList.remove("select");
  greyjoy.classList.remove("select");
  tyrell.classList.remove("select");
  tully.classList.remove("select");
  redwyne.classList.remove("select");
  frey.classList.remove("select");
  arryn.classList.remove("select");
  dothraki.classList.remove("select");
  e.target.classList.add("select");
}

function handleChange(e) {
  let arr = [];
  input_value.forEach((p) => {
    arr.push({
      name: p.name,
      wikiLink: p.wikiLink,
      people: p.people.filter(
        (d) =>
          d.name.toLowerCase().includes(e.target.value) ||
          d.name.toLowerCase().includes(e.target.value)
      ),
    });
  });
  createUI(arr);
}

function createUI(data) {
  cards.innerHTML = "";
  data.forEach((d) => {
    if (d.people.length) {
      d.people.forEach((p) => {
        let div1 = document.createElement("div");
        div1.classList.add("container");
        let div = document.createElement("div");
        div.classList.add("card");
        let img = document.createElement("img");
        img.setAttribute("src", p.image);
        let heading = document.createElement("h2");
        heading.innerText = p.name;
        let para = document.createElement("p");
        para.innerText = p.description;
        let button = document.createElement("button");
        button.innerText = "Know More";
        div.append(img, heading, para, button);
        div1.append(div);
        cards.append(div1);
      });
    }
  });
}

createUI(input_value);
