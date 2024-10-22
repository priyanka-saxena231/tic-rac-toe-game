let userScore = 0;
let compScore = 0;

// for choose the choice from three of them 
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// here we take input from computer
const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // for taken random input from computer we use math.random Function
    const randIdx = Math.floor(Math.random() * 3);
    // for taken not value in decimal use floor
    // and for taken 0-2 indez value thats why *3
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "game was draw";
    msg.style.backgroundColor = "Pink";
};

const showWinner = (userwin, compChoice, userChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "Red";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Loose ${compChoice} beat Your ${userChoice}`;
        msg.style.backgroundColor = "Green";
    }
};

// for user choice
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // generate com chice
    const compChoice = genComChoice();
    console.log("comp choice=", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    }

    else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
      }
};


// event listner is used for wheb ever we call any choice event lisnter give ID of that choice

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});