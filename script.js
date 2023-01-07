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

  while (scores.lastChild) {
    scores.removeChild(scores.lastChild);
  }
});

function removeAllButtons() {
  buttons.forEach((button) => {
    button.remove();
  });
  playermenu.appendChild(newRound);
}

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

  if (roundResult == 1) {
    PlayerScore++;
    youWin();
  } else if (roundResult == 2) {
    ComputerScore++;
    youLose();
  } else if (roundResult == 0) {
    draft();
  }

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
