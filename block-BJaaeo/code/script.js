let number_pad = document.querySelector(".number-pad");
let screen = document.querySelector(".screen");
let equal = document.querySelector(".equal");
let nums = [];
let operator;
let clear = true;

number_pad.addEventListener("click", () => {
  handleClick(event);
});

function handleClick(event) {
  //   console.log(event.target.attributes["data-num"].value);
  console.log(event.target.attributes);
  if (event.target.attributes["data-clear"]) {
    screen.innerHTML = "";
    nums = [];
  } else if (event.target.attributes["data-op"]) {
    if (operator) {
      nums.push(Number(screen.innerHTML));
      let res = operationResult(nums, operator);
      nums = [];
      nums.push(res);
      operator = event.target.attributes["data-op"].value;
      clear = true;
      console.log(nums);
    } else if (screen.innerHTML) {
      nums.push(Number(screen.innerHTML));
      operator = event.target.attributes["data-op"].value;
      clear = true;
    }
    console.log(nums);
  } else {
    if (clear) {
      screen.innerHTML = "";
      clear = false;
    }
    screen.innerHTML += event.target.attributes["data-num"].value;
  }
}

equal.addEventListener("click", () => {
  nums.push(Number(screen.innerHTML));
  console.log(nums, operator);
  let res = operationResult(nums, operator);
  screen.innerHTML = res;
  console.log(nums);
  nums = [];
});

function handleResult(event) {}

function operationResult(nums, operator) {
  if (operator == "+") {
    result = nums.reduce((acc, num) => num + acc, 0);
    return result;
  }
  if (operator == "-") {
    result = nums.reverse().reduce((acc, num) => num - acc, 0);
    return result;
  }
  if (operator == "*") {
    result = nums.reduce((acc, num) => num * acc, 1);
    return result;
  }
  if (operator == "%") {
    result = nums.reverse().reduce((acc, num) => num / acc);
    return result;
  }
}
