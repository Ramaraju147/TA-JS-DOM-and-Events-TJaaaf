let boxes_1 = document.querySelectorAll(".box-1 .box")
let boxes_2 =  document.querySelectorAll(".box-2 .box")
let box_2 = document.querySelector(".box-2")

function assignNumber(arr){
  arr.forEach((box,index) => {
    box.setAttribute("data-number",index+1);
  })
}

assignNumber(boxes_1);
assignNumber(boxes_2);


boxes_1.forEach((box) => {
  box.addEventListener("click",eventHandler)
})

box_2.addEventListener("click",eventHandler)

function eventHandler(event){
  console.dir(event.target)
  if(event.target.tagName !== "UL"){
  event.target.innerText = Number(event.target.dataset.number);
    setTimeout(() => {event.target.innerText=""},5000)
  }
}