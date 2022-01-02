let form = document.querySelector("form");
let result = document.querySelector(".result");
let allInputs = document.querySelectorAll("input");
let container = document.querySelector(".container");

form.addEventListener("submit",(event)=>{
event.preventDefault();
let name = form.elements.name
console.log(name.nextElementSibling)
let email = form.elements.email
let number = form.elements.number
let password = form.elements.password
let confirmPassword = form.elements.confirm_password

if(name.value<4){
  name.nextElementSibling.innerText = "Name can't be less than 4 characters"
  name.classList.add("error")
}else if(name.value.split("").some(e => Number(e))){
  name.nextElementSibling.innerText = "You can't use number in the name field"
  name.classList.add("error")
}else{
  name.nextElementSibling.innerText = ""
  name.classList.remove("error")
  name.classList.add("success")
}
console.log(name.classList)
if(email.value.length<=6 || !email.value.split("").some(e => e==="@")){
  email.nextElementSibling.innerText = "Not a valid email"
  email.classList.add("error")
}else{
  email.nextElementSibling.innerText = ""
  email.classList.remove("error")
  email.classList.add("success")
}

if( !number.value.split("").every(e => Number(e))){
  number.nextElementSibling.innerText = "Phone number can only contain numbers"
  number.classList.add("error")
}else if(number.value.length<7 ){
  number.nextElementSibling.innerText = "Phone number cannot be less than 7 digits"
  number.classList.add("error")
}else{
  number.nextElementSibling.innerText = ""
  number.classList.remove("error")
  number.classList.add("success")
}


if(password.value !== confirmPassword.value ){
  confirmPassword.nextElementSibling.innerText = "Password didn't match"
  confirmPassword.classList.add("error")
}else if(confirmPassword.value==""){
  confirmPassword.nextElementSibling.innerText = "Password can't be empty"
  confirmPassword.classList.add("error")
}else{
  confirmPassword.nextElementSibling.innerText = ""
  confirmPassword.classList.remove("error")
  confirmPassword.classList.add("success")
}

let arrInputs = [...allInputs]
if(arrInputs.every(input => !input.classList.contains("error"))){
  container.classList.add("hidden")
  result.classList.remove("hidden");
  result.innerText = "User Added Successfully!!!"
}

})