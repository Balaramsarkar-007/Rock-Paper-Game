let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "Game Was Draw";
    msg.style.backgroungColor = "#081b31";
}

const showWin = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroungColor="green";
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Loss ${compChoice} beats your ${userChoice}`;
        msg.style.backgroungColor="red";
    }
}

const compGenChoise = () => {
    const options = ["rock", "paper", "scissor"];
    const indx = Math.floor(Math.random() * 3);
    return options[indx];
}

const playGame = (userChoice) => {
    const compChoice = compGenChoise();

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userwin = true;
        if(userChoice === "rock"){
            //paper, scissor
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            //rock, scissor
            userwin = compChoice === "scissor" ? false : true;
        }
        else {
            //rock,paper
            userwin = compChoice === "rock" ? false : true;
        }

        showWin(userwin,userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoise = choice.getAttribute("id");
        
        playGame(userChoise);
    });
});