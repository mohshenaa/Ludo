const Roll = document.getElementById("roll");
const Result = document.getElementById("result");
const max = 6;
const min = 1;
let randomNum;
Roll.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  Result.textContent = randomNum;
};
