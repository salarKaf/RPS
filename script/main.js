let choosenByUser1;

let win = false;
let equals = false;
let Lost = false;

let OptionsForChoose = document.querySelectorAll('input[type="radio"]');
OptionsForChoose.forEach(function (option) {
  option.addEventListener("click", function () {
    (choosenByUser1 = option.id), console.log(choosenByUser1);
  });
});

let choosenByComputer;

let LogicOfGame = function (choosenByComputer, choosenByUser1) {
  if (choosenByComputer == "option1" && choosenByUser1 == "option1") {
    equals = true;
  } else if (choosenByUser1 == "option1" && choosenByComputer == "option2") {
    win = true;
  } else if (choosenByUser1 == "option2" && choosenByComputer == "option2") {
    equals = true;
  } else if (choosenByUser1 == "option2" && choosenByComputer == "option3") {
    win = true;
  } else if (choosenByUser1 == "option3" && choosenByComputer == "option3") {
    equals = true;
  } else if (choosenByUser1 == "option3" && choosenByComputer == "option1") {
    win = true;
  } else {
    Lost = true;
  }
};

const textTitle = document.querySelector("#titleText");
const button = document.querySelector("button");
const YourTurn = document.querySelector(".TextRockPaperScissor");

button.addEventListener("click", function () {
  if (button.innerHTML == "start") {
    let randomNumber = (Math.floor(Math.random() * 10) % 3) + 1;
    let choosenByComputer = "option" + randomNumber;
    LogicOfGame(choosenByComputer, choosenByUser1);
    if (win) {
      textTitle.innerHTML = "You Win!";
      textTitle.style.color = "green";
      button.innerHTML = "Play again";
    } else if (equals) {
      textTitle.innerHTML = "equals!";
      textTitle.style.color = "#FD8F11";
      button.innerHTML = "Play again";
    } else if (Lost) {
      textTitle.innerHTML = "You Lost!";
      textTitle.style.color = "#CB1111";
      button.innerHTML = "Play again";
    }
  } else {
    textTitle.style.color = "white";
    textTitle.innerHTML = "Rock Paper Scissors";
    button.innerHTML = "start";
    YourTurn.innerHTML = "Computer Chose “rock/paper/scissor”!";
    win = false;
    equals = false;
    Lost = false;
  }
});
