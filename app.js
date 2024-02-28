let userScore = 0;
let compScore = 0;

const user = document.querySelector("#userScore");
const comp = document.querySelector("#compScore");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const getCompChoice = () => {
    let options = ["stone", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}

const drawGame = (userChoice) => {
    msg.innerText = `Game Draw. You both chose ${userChoice}`;
    msg.style.backgroundColor = "#265073";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText =  `You Win! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        user.innerText = `${userScore}`;
        msg.style.backgroundColor = "green";
    } else{
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        compScore++;
        comp.innerText = `${compScore}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if(userChoice === compChoice){
        drawGame(userChoice);
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});