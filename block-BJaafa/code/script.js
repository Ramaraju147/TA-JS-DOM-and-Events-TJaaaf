function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var message = "";
  if (hour > 4 && hour < 12) {
    message = "Good Morning Raju";
  } else if (hour > 12 && hour < 16) {
    message = "Good Afternoon Raju";
  } else if (hour > 16 && hour < 20) {
    message = "Good Evening Raju";
  } else {
    message = "Good Night Raju";
  }
  document.querySelector(".heading").innerHTML = message;
  hour = updateTime(hour);
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  min = updateTime(min);
  sec = updateTime(sec);
  var midday = "AM";
  midday = hour >= 12 ? "PM" : "AM";
  document.querySelector(".time").innerHTML =
    hour + " : " + min + " : " + sec + " " + midday;
  setTimeout(function () {
    currentTime();
  }, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

currentTime();
