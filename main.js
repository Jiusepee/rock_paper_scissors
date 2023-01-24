const rock = document.getElementById("rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const icons = document.querySelector(".icon");
const delIcons = document.querySelectorAll(".icons > i");
const iconsRes = document.getElementById("iconsRes");

// declaring bot, player and results
let botPlay;
let player;
let result = document.createElement("h2");
let vs = document.createElement("h2");

// event listeners
rock.addEventListener("click", function () {
  player = "rock";
  botChoice();
  const resultDiv = document.querySelector(".result");
  resultDiv.appendChild(result);
  game();
  removeIcons();
  playerChooseIcons();
  vsFunc();
  botChooseIcons();

  // replay button
  const replay = document.createElement("button");
  replay.setAttribute("class", "replay");
  replay.innerHTML = "Replay";
  iconsRes.appendChild(replay);
  replay.addEventListener("click", () => {
    const resetIcons = document.querySelectorAll("#iconsRes > i, h2, button")
    for (let i = 0; i < resetIcons.length; i++) {
      resetIcons[i].remove();
    }
    iconsRes.appendChild(rock);
    iconsRes.appendChild(paper);
    iconsRes.appendChild(scissors);
  });
});
paper.addEventListener("click", () => {
  player = "paper";
  botChoice();
  const resultDiv = document.querySelector(".result");
  resultDiv.appendChild(result);
  game();
  removeIcons();
  playerChooseIcons();
  vsFunc();
  botChooseIcons();

  //replay button
  const replay = document.createElement("button");
  replay.setAttribute("class", "replay");
  replay.innerHTML = "Replay";
  iconsRes.appendChild(replay);
  replay.addEventListener("click", () => {
    const resetIcons = document.querySelectorAll("#iconsRes > i, h2, button")
    for (let i = 0; i < resetIcons.length; i++) {
      resetIcons[i].remove();
    }
    iconsRes.appendChild(rock);
    iconsRes.appendChild(paper);
    iconsRes.appendChild(scissors);
  });
});
scissors.addEventListener("click", () => {
  player = "scissors";
  botChoice();
  const resultDiv = document.querySelector(".result");
  resultDiv.appendChild(result);
  game();
  removeIcons();
  playerChooseIcons();
  vsFunc();
  botChooseIcons();

  //replay button
  const replay = document.createElement("button");
  replay.setAttribute("class", "replay");
  replay.innerHTML = "Replay";
  iconsRes.appendChild(replay);
  replay.addEventListener("click", () => {
    const resetIcons = document.querySelectorAll("#iconsRes > i, h2, button")
    for (let i = 0; i < resetIcons.length; i++) {
      resetIcons[i].remove();
    }
    iconsRes.appendChild(rock);
    iconsRes.appendChild(paper);
    iconsRes.appendChild(scissors);
  });
});

// game logic
const game = () => {
  // rock
  if (player === "rock" && botPlay === "rock") {
    console.log("Draw! Bot chose rock too!");
    result.innerHTML = "Draw! Bot chose rock too!";
  } else if (player === "rock" && botPlay === "paper") {
    console.log("You lose! Bot chose paper!");
    result.innerHTML = "You lose! Bot chose paper!";
  } else if (player === "rock" && botPlay === "scissors") {
    console.log("You win! Bot chose scissors!");
    result.innerHTML = "You win! Bot chose scissors!";
  }
  // paper
  if (player === "paper" && botPlay === "rock") {
    console.log("You win! Bot chose rock!");
    result.innerHTML = "You win! Bot chose rock!";
  } else if (player === "paper" && botPlay === "paper") {
    console.log("Draw! Bot chose paper too!");
    result.innerHTML = "Draw! Bot chose paper too!";
  } else if (player === "paper" && botPlay === "scissors") {
    console.log("You lose! Bot chose scissors!");
    result.innerHTML = "You lose! Bot chose scissors!";
  }
  // scissors
  if (player === "scissors" && botPlay === "rock") {
    console.log("You lose! Bot chose rock!");
    result.innerHTML = "You lose! Bot chose rock!";
  } else if (player === "scissors" && botPlay === "paper") {
    console.log("You win! Bot chose paper!");
    result.innerHTML = "You win! Bot chose paper!";
  } else if (player === "scissors" && botPlay === "scissors") {
    console.log("Draw! Bot chose scissors too!");
    result.innerHTML = "Draw! Bot chose scissors too!";
  }
};

// declaring bot choices
const botChoice = () => {
  const botRandom = Math.floor(Math.random() * 3);
  if (botRandom === 0) {
    botPlay = "rock";
  } else if (botRandom === 1) {
    botPlay = "paper";
  } else if (botRandom === 2) {
    botPlay = "scissors";
  }
};

const playerChooseIcons = () => {
  if (player === "rock") {
    const clone = rock.cloneNode(true);
    iconsRes.appendChild(clone);
  } else if (player === "paper") {
    const clone = paper.cloneNode(true);
    iconsRes.appendChild(clone);
  } else if (player === "scissors") {
    const clone = scissors.cloneNode(true);
    iconsRes.appendChild(clone);
  }
};

const botChooseIcons = () => {
  if (botPlay === "rock") {
    const clone = rock.cloneNode(true);
    iconsRes.appendChild(clone);
  } else if (botPlay === "paper") {
    const clone = paper.cloneNode(true);
    iconsRes.appendChild(clone);
  } else if (botPlay === "scissors") {
    const clone = scissors.cloneNode(true);
    iconsRes.appendChild(clone);
  }
};

const vsFunc = () => {
  vs.setAttribute("class", "vs");
  vs.innerHTML = "VS";
  iconsRes.appendChild(vs);
};

// remove icons
const removeIcons = () => {
  for (let i = 0; i < delIcons.length; i++) {
    delIcons[i].remove();
  }
};
