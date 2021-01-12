const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let errorMessage = "";
  let name = e.target.elements.name;
  let email = e.target.elements.email;
  let phoneNo = e.target.elements.number;
  let password = e.target.elements.password;
  let confirmPassword = e.target.elements["confirm-password"];
  if (name.value.length < 4) {
    errorMessage = "UserName can't be less than 4 characters";
    name.nextElementSibling.innerText = errorMessage;
    name.classList;
  } else if (validateName(name.value)) {
    errorMessage = "You can't use number in the name field";
    name.nextElementSibling.innerText = errorMessage;
  }

  if (!validateEmail(email.value)) {
    errorMessage = "Not a valid email";
    email.nextElementSibling.innerText = errorMessage;
  } else if (email.length > 6) {
    errorMessage = "Email can't be less than 6 characters";
    email.nextElementSibling.innerText = errorMessage;
  }

  if (phoneNo.length > 6) {
    errorMessage = "Phone No can't be less than 7 characters";
    email.nextElementSibling.innerText = errorMessage;
  }

  if (!(password.value === confirmPassword.value)) {
    errorMessage = "Password doesn't match";
    confirmPassword.nextElementSibling.innerText = errorMessage;
  }
}

function validateName(name) {
  return name.split("").some((e) => Number(e));
}

function validateEmail(email) {
  return email.split("").some((e) => e === "@");
}
