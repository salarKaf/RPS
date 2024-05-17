let player1 = "";
let player2 = "";
let player2Iswin = false;
let equals = false;
let Player1Iswin = false;

let counter1 = 0;
let counter2 = 0;

document.addEventListener("keydown", (e) => {
  if (button.innerHTML == "Player1") {
    switch (e.code) {
      case "KeyA":
        player1 = "paper";
        console.log(player1);

        button.innerHTML = "Player2";
        YourTurn.innerHTML = "Player2's turn";

        break;
      case "KeyS":
        player1 = "scissor";
        console.log(player1);

        button.innerHTML = "Player2";
        YourTurn.innerHTML = "Player2's turn";

        break;
      case "KeyD":
        player1 = "rock";
        console.log(player1);

        button.innerHTML = "Player2";
        YourTurn.innerHTML = "Player2's turn";

        break;
      default:
    }
  }
});

//Player 2 chooses the option

document.addEventListener("keydown", (e) => {
  if (button.innerHTML == "Player2") {
    switch (e.code) {
      case "ArrowLeft":
        player2 = "paper";
        console.log(player2);
        button.innerHTML = "Start";
        break;
      case "ArrowUp":
        player2 = "scissor";
        console.log(player2);
        button.innerHTML = "Start";

        break;
      case "ArrowRight":
        player2 = "rock";
        console.log(player2);
        button.innerHTML = "Start";

        break;
      default:
    }
  }
});

//Logic Of The Game

let LogicOfGame = function (player1, player2) {
  if (player2 == "paper" && player1 == "paper") {
    equals = true;
  } else if (player1 == "paper" && player2 == "scissor") {
    player2Iswin = true;
  } else if (player1 == "scissor" && player2 == "scissor") {
    equals = true;
  } else if (player1 == "scissor" && player2 == "rock") {
    player2Iswin = true;
  } else if (player1 == "rock" && player2 == "rock") {
    equals = true;
  } else if (player1 == "rock" && player2 == "paper") {
    player2Iswin = true;
  } else {
    Player1Iswin = true;
  }
};

//Pressing the Button start & play again
const button = document.querySelector("button");
const textTitle = document.querySelector("#titleText");
const scoresAndTurn = document.querySelector(".scoresAndTurn");

button.addEventListener("click", function () {
  if (button.innerHTML == "Start") {
    LogicOfGame(player1, player2);
    if (player2Iswin) {
      counter2++;
      textTitle.innerHTML = "Player2 is Winner!";
      scoresAndTurn.innerHTML = `Player1---${counter1} :${counter2}--- Player2`;
      textTitle.style.color = "#4EFF22";
      button.innerHTML = "Play again";
    } else if (equals) {
      textTitle.innerHTML = "equals!";
      scoresAndTurn.innerHTML = `Player1---${counter1} :${counter2}--- Player2`;
      textTitle.style.color = "#FD8F11";
      button.innerHTML = "Play again";
    } else if (Player1Iswin) {
      counter1++;
      scoresAndTurn.innerHTML = `Player1---${counter1} :${counter2}--- Player2`;
      textTitle.innerHTML = "Player1 is Winner!";
      textTitle.style.color = "#4EFF22";
      button.innerHTML = "Play again";
    }
    document.getElementById(`${player1}1`).classList.add("selected");
    document.getElementById(`${player2}2`).classList.add("selected");
  } else if ((button.innerHTML = "Play again")) {
    if (player1 != "" && player2 != "") {
      document.getElementById(`${player1}1`).classList.remove("selected");
      document.getElementById(`${player2}2`).classList.remove("selected");
    }
    textTitle.style.color = "white";
    textTitle.innerHTML = "Rock Paper Scissors";
    button.innerHTML = "Player1";
    scoresAndTurn.innerHTML = "Player1's turn";
    player2Iswin = false;
    equals = false;
    Player1Iswin = false;
    player1 = "";
    player2 = "";
  }
});
