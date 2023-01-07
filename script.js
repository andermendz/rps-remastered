const brock = document.querySelector("#brock");
const bpaper = document.querySelector("#bpaper");
const bscissors = document.querySelector("#bscissors");
const result = document.querySelector("#result");
const scores = document.querySelector(".scores");

playermenu = document.querySelector("#playermenu");
const buttons = document.querySelectorAll("button");

const newRound = document.createElement("button");
newRound.textContent = "New Round?";
newRound.addEventListener("click", () => {
  playermenu.appendChild(brock);
  playermenu.appendChild(bpaper);
  playermenu.appendChild(bscissors);
  playermenu.removeChild(newRound);

  result.textContent = "Wait for the Score, 5 Points to Win";
  result.setAttribute("style", "color: black");

  // clean the scores from the last round
  while (scores.lastChild) {
    scores.removeChild(scores.lastChild);
  }
});

// remove all the button and ask to start a new round
function removeAllButtons() {
  buttons.forEach((button) => {
    button.remove();
  });
  playermenu.appendChild(newRound);
}

// calls the function round with the respective Player Choice
brock.addEventListener("click", () => {
  Round(1);
});
bpaper.addEventListener("click", () => {
  Round(2);
});
bscissors.addEventListener("click", () => {
  Round(3);
});

var PlayerScore = 0;
var ComputerScore = 0;
// send scores to DOM result logs
function Round(playerChoice) {
  function youWin() {
    const log = document.createElement("div");
    log.setAttribute("id", "log");
    log.setAttribute("style", "color:green");
    log.textContent = `You Win You ${PlayerScore} - Computer ${ComputerScore}`;
    scores.appendChild(log);
  }

  function youLose() {
    const log = document.createElement("div");
    log.setAttribute("id", "log");
    log.setAttribute("style", "color:red");
    log.textContent = `You Lose You ${PlayerScore} - Computer ${ComputerScore}`;
    scores.appendChild(log);
  }

  function draft() {
    const log = document.createElement("div");
    log.setAttribute("id", "log");
    log.textContent = `Draft You ${PlayerScore} - Computer ${ComputerScore}`;
    scores.appendChild(log);
  }

  // computerChoice

  var computerChoice = Math.floor(Math.random() * 3) + 1;
  var roundResult;

  // round result
  //
  // 0 draft
  // 1 win
  // 2 lose

  // player rock
  if (playerChoice == 1 && computerChoice == 1) {
    roundResult = 0;
  } else if (playerChoice == 1 && computerChoice == 2) {
    roundResult = 2;
  } else if (playerChoice == 1 && computerChoice == 3) {
    roundResult = 1;
    //  player paper
  } else if (playerChoice == 2 && computerChoice == 1) {
    roundResult = 1;
  } else if (playerChoice == 2 && computerChoice == 2) {
    roundResult = 0;
  } else if (playerChoice == 2 && computerChoice == 3) {
    roundResult = 2;
  }
  // player scissors
  else if (playerChoice == 3 && computerChoice == 1) {
    roundResult = 2;
  } else if (playerChoice == 3 && computerChoice == 2) {
    roundResult = 1;
  } else if (playerChoice == 3 && computerChoice == 3) {
    roundResult = 0;
  }

  // call the logs and provides the winner of each round
  if (roundResult == 1) {
    PlayerScore++;
    youWin();
  } else if (roundResult == 2) {
    ComputerScore++;
    youLose();
  } else if (roundResult == 0) {
    draft();
  }

  // adds the result 
  result.setAttribute("style", "");
  if (PlayerScore == 5) {
    result.setAttribute("style", "color: green");
    result.textContent =
      " Player Wins Final Score is : " +
      " Player: " +
      PlayerScore +
      " Computer: " +
      ComputerScore;
    PlayerScore = 0;
    computerScore = 0;
    removeAllButtons();
  } else if (ComputerScore == 5) {
    result.setAttribute("style", "color:red");
    result.textContent =
      " Computer Wins Final Score is : " +
      " Player: " +
      PlayerScore +
      " Computer: " +
      ComputerScore;
    PlayerScore = 0;
    ComputerScore = 0;
    removeAllButtons();

  }
}
