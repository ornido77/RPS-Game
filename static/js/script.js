// Challenge 1
function ageInDays() {
   var birthYear = prompt("What year were you born?");
   var result = (2021 - birthYear) * 365;
   var h1Tag = document.createElement("h1")
   var textResult = document.createTextNode("You are " +result+ " days old.")
   h1Tag.setAttribute("id", "age-in-days");
   h1Tag.appendChild(textResult);
   document.getElementById('flex-box-result').appendChild(h1Tag);
}

function reset() {
    document.getElementById("age-in-days").remove();
}

// Challenge 2
function generateCat() {
    var image = document.createElement("img");
    var div = document.getElementById("cat-container");
    image.src = "static/images/cat.gif";
    image.setAttribute("class", "cat")
    div.append(image);
}

//Challenge 3
function rpsGame(yourChoice) {
    playerChoice = yourChoice.id;
    console.log(playerChoice);
    botChoice = randIntToChoice(rpsRandInt());
    console.log(botChoice);
    results = decideWinner(playerChoice, botChoice);
    console.log(results);
    message = resultMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function rpsRandInt() {
    return Math.floor(Math.random() * 3);
}

function randIntToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(player, bot) {
    var comparing = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };

    var playerScore = comparing[player][bot];
    var botScore = comparing[bot][player];

    return[playerScore, botScore];
}

function resultMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    }
    else if(yourScore === 0.5) {
        return {'message': 'We got a tie', 'color': 'yellow'};
    }
    else {
        return {'message': 'You Win!', 'color': 'green'};
    };
}

function rpsFrontEnd(playerChoiceImg, botChoiceImg, message) {
    var imgSet = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var playerImgDiv = document.createElement('div');
    var botImgDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    playerImgDiv.innerHTML = "<img src = '" + imgSet[playerChoiceImg] + "' style = 'box-shadow: 0px 10px 50px rgba(37, 50,233, 1);'>"
    messageDiv.innerHTML = "<h1 style = 'color: " + message['color'] +"; font-size: 60px; padding: 30px; '>" + message ['message'] + "</h1>"
    botImgDiv.innerHTML = "<img src = '" + imgSet[botChoiceImg] + "' style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"
    
    document.getElementById("flex-box-rpsGame").appendChild(playerImgDiv);
    document.getElementById("flex-box-rpsGame").appendChild(messageDiv);
    document.getElementById("flex-box-rpsGame").appendChild(botImgDiv);
}