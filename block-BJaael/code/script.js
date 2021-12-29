function disco(){
let table = document.createElement("table");
for(let i=0;i<20;i++){
  let tr = document.createElement("tr");
  for(let j=0;j<20;j++){
    let td = document.createElement("td");
    td.innerText = Math.floor(Math.random() * 400)
    tr.append(td)
  }
  table.append(tr);
}
return table;
}

document.body.append(disco());


let discoTable = document.querySelector("table");

let allTd = document.querySelectorAll("td");

function generateRandomColor(){
  let letters = "123456789ABCDEF";
  let color = "#";
  for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
  }
  return color;
}

discoTable.addEventListener("mousemove", () => {
allTd.forEach(td => {
  td.innerText= Math.floor(Math.random() * 400);
  td.style.backgroundColor = generateRandomColor();
})
})