function getComputerChoice (){
    let choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}


function playRound(playerChoice, ComputerChoice){
    
    let rock = {
        rock: "Tie",
        scissors: "Win",
        paper: "Lose"
    };

    let scissors = {
        rock: "Lose",
        scissors: "Tie",
        paper: "Win"
    };

    let paper = {
        rock: "Win",
        scissors: "Lose",
        paper: "Tie"
    };

    switch(playerChoice.toLowerCase()){
        case 'rock':
            result = rock[ComputerChoice.toLowerCase()];
            break
        case 'scissors':
            result = scissors[ComputerChoice.toLowerCase()];
            break
        case 'paper':
            result = paper[ComputerChoice.toLowerCase()];
            break
        default:
            result ="Error in selection"
    };




    let phrase = result == "Win" ? `${playerChoice} beats ${ComputerChoice}!`
                : result == "Lose" ? `${ComputerChoice} beats ${playerChoice}!`
                : "Play Again!";

    console.log("Your Choice: ",playerChoice);
    console.log("Computer Choice: ",ComputerChoice);
    return `You ${result}!!! ${phrase}`;
}

console.log(playRound(getComputerChoice(),getComputerChoice()));