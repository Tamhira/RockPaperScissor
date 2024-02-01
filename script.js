let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uscore = document.querySelector("#user-score");
const cscore = document.querySelector("#comp-score");
const gameSound = document.getElementById("gameSound");
const wonSound = document.getElementById("wonSound");
const lostSound = document.getElementById("lostSound");

const compChoiceGen = () => {
    const options = ["rock","paper","scissor"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin == true){
        wonSound.play();
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }else{
        lostSound.play();
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    gameSound.play();
    msg.innerText = "Draw. Play Again"
    msg.style.backgroundColor = "#363457";
}

const playGame = (userChoice) => {
    const compChoice = compChoiceGen();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock" && compChoice === "scissor" ||
        userChoice === "paper" && compChoice === "rock" ||
        userChoice === "scissor" && compChoice === "paper"){
            userWin = true;
            userScore = userScore + 1;
            uscore.innerText = userScore;
            
        }else{
            userWin = false;
            compScore = compScore + 1;
            cscore.innerText = compScore;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // gameSound.play();
        playGame(userChoice);
    });
});

