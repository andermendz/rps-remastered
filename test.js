game();
function game() {
  var End = "";
  var playerScore = 0;
  var ComputerScore = 0;

  for (let i = 1; i <= 5; i++) {
    var score = round();

    console.log(score);

    if (score == 1) {
      playerScore++;
    } else if (score == 2) {
      ComputerScore++;
    }

    if (playerScore > ComputerScore) {
      End = " You Win";
    } else if (playerScore < ComputerScore) {
      End = "You Lose";
    } else if (playerScore == ComputerScore) {
      End = "Draft";
    }
  }
  return console.log("Global Score is " + End);
}

function round() {
  // computerChoice

  var playerInput = prompt("Rock, Paper or Scissors?");
  var computerChoice = Math.floor(Math.random() * 3) + 1;
  var playerChoice;
  var roundResult;
  var Result;

  // player input
  if (playerInput == "rock") {
    playerChoice = 1;
  } else if (playerInput == "paper") {
    playerChoice = 2;
  } else if (playerInput == "scissors") {
    playerChoice = 3;
  }

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

  // translate result
  if (roundResult == 0) {
    Result = "draft";
  } else if (roundResult == 1) {
    Result = "win";
  } else if (roundResult == 2) {
    Result = "lose";
  }

  return roundResult;
}
