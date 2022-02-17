/* computerplay function that returns randomly either 'Rock' 'Paper' or 'SCISSORS' 

two parameters are required 
playerSelection = 
computerSelection = 

return a string ' You loose ! Paper beats Rock' 

make playerSelection case insensetive */

let input = window.prompt('Please make your choise: Rock, Paper or Scissors',);
let correctInput = input.toUpperCase();


const playerSelection = correctInput;
const computerSelection = computerPlay();

function computerPlay(){
    const selection = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomItem = selection[Math.floor(Math.random() * selection.length)];
    let result = randomItem.toUpperCase();
    return result;
}

function playRound(){
    if (playerSelection == computerSelection){
        return "No winner this time!"
    }
    else if (playerSelection == 'ROCK' && computerSelection == "PAPER"){
        return "You Lost!"
    }
    else if (playerSelection == 'ROCK' && computerSelection == "SCISSORS"){
        return "You Won!"
    }
    else if (playerSelection == 'PAPER' && computerSelection == "ROCK"){
        return "You Won!"
    }
    else if (playerSelection == 'PAPER' && computerSelection == "SCISSORS"){
        return "You Lost!"
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == "ROCK"){
        return "You Lost!"
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == "PAPER"){
        return "You Won!"
    }
}


function game(){
    
  
}
console.log(playerSelection, computerSelection);
console.log(game()); 