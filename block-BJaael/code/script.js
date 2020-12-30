var table = document.createElement("table");
// function randomColor() {
//   let alphabets = "0123456789ABCDEF";
//   let color = "#";
//   for (i = 0; i < 6; i++) {
//     color += alphabets[Math.floor(Math.random() * 15 + 1)];
//   }
//   return color;
// }
function createTable() {
  table.innerHTML = "";
  for (i = 0; i < 15; i++) {
    var tr = document.createElement("tr");
    for (j = 0; j < 15; j++) {
      var td = document.createElement("td");
      td.style.backgroundColor =
        "#" + (((1 << 24) * Math.random()) | 0).toString(16);
      var text = document.createTextNode(Math.floor(Math.random() * 300 + 1));
      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}

function addHtml() {
  document.body.appendChild(createTable());
}

addHtml();

let grid = document.querySelector("table");
grid.addEventListener("mousemove", addHtml);
