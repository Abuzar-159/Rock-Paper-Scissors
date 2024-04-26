let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector(".userScore");
const compScorePara = document.querySelector(".compScore");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const gameDraw = () => {
  msg.innerText = "Game Was Draw!";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    /*     console.log("choice clicked was", userChoice);
     */ playGame(userChoice);
  });
});
