/* computerplay function that returns randomly either 'Rock' 'Paper' or 'SCISSORS' 

two parameters are required 
playerSelection = 
computerSelection = 

return a string ' You loose ! Paper beats Rock' 

make playerSelection case insensetive */

function userPlay(){
    let input = window.prompt('Please make your choise: Rock, Paper or Scissors',);
    let correctInput = input.toUpperCase();
    return correctInput;
}




function computerPlay(){
    const selection = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomItem = selection[Math.floor(Math.random() * selection.length)];
    let result = randomItem.toUpperCase();
    return result;
}

function playRound(){
    let playerSelection = userPlay()
    let computerSelection = computerPlay()
    console.log(playerSelection, computerSelection);

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

// function game that stores 5 rounds, gives result to each round and final result 
// for each round promt -> play -> store result 
function game(){
    let computerResult = 0;
    let playerResult = 0; 
    for ( let round = 0; round <5; round++ ){
        const result = playRound();
        if (result == "You Lost!"){
            computerResult ++;
        } 
        if (result == "You Won!"){
            playerResult ++;
        } 
    console.log(playerResult, computerResult);
    }
    if (computerResult > playerResult){
        return "You Lost!";  
    }
    else if (playerResult > computerResult){
        return "You Won!"
    } 
    else {
        return "Tie. Play Again";
    }
    }


    

  // additional loop if on the 5th round there is a tie 





console.log(game()); 