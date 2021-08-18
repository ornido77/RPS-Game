let userScore = 0;
let botScore = 0;
const userScore_span = document.getElementById("user-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getBotChoice() {
    const choices = ['r', 'p', 's'];
    const randInt = Math.floor(Math.random() * 3);
    return choices[randInt];
}

function letterToWord(x) {
    if (x === "r") return "Rock";
    if (x === "p") return "Paper";
    else return "Scissors";
}

function win(user, bot) {
    const userIndicator = "user".fontsize(3).sup();
    const botIndicator = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    botScore_span.innerHTML = botScore;
    result_p.innerHTML = `${letterToWord(user)}${userIndicator} beats ${letterToWord(bot)}${botIndicator}. You Win!`; 
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
}

function lose(user, bot) {
    const userIndicator = "user".fontsize(3).sup();
    const botIndicator = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    botScore++;
    userScore_span.innerHTML = userScore;
    botScore_span.innerHTML = botScore;
    result_p.innerHTML = `${letterToWord(user)}${userIndicator} loses to ${letterToWord(bot)}${botIndicator}. You lose...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
}

function draw(user, bot) {
    const userIndicator = "user".fontsize(3).sup();
    const botIndicator = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${letterToWord(user)}${userIndicator} is ${letterToWord(bot)}${botIndicator}. Try Again.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);
    console.log("draw");
}

function game(userChoice) {
    const botChoice = getBotChoice();
    switch (userChoice + botChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, botChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, botChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, botChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();
