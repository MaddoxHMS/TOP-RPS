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

    let output = {};

    switch(playerChoice.toLowerCase()){
        case 'rock':
            output.result = rock[ComputerChoice.toLowerCase()];
            break
        case 'scissors':
            output.result = scissors[ComputerChoice.toLowerCase()];
            break
        case 'paper':
            output.result = paper[ComputerChoice.toLowerCase()];
            break
        default:
            output.result = "Error in selection"
    };

    if(output.result== "Win"){
        output.phrase =`${playerChoice} beats ${ComputerChoice}!`;
        output.playerScoreDelta = 1;
        output.compScoreDelta = 0;
    } else if(output.result == "Lose"){
        output.phrase =`${ComputerChoice} beats ${playerChoice}!`;
        output.playerScoreDelta = 0;
        output.compScoreDelta = 1;
    } else {
        output.phrase = `Play again!`
        output.playerScoreDelta = 0;
        output.compScoreDelta = 0;
    }


        output.phrase = output.result == "Win" ? `${playerChoice} beats ${ComputerChoice}!`
                : output.result == "Lose" ? `${ComputerChoice} beats ${playerChoice}!`
                : "Play Again!";

    console.log("Your Choice: ",playerChoice);
    console.log("Computer Choice: ",ComputerChoice);
    return output;
}


function game(){
    console.log("Let's Play Rock-Paper-Scissors!!!")
    playerScore = 0;
    compScore = 0;
    
    for(let i = 1; i<6; i++) {
        console.log(`****************`);
        console.log(`Round ${i}`);
        let playerChoice = prompt("Select Rock, Paper, or Scissors");
        let currentRound = playRound(playerChoice,getComputerChoice());
        playerScore += currentRound.playerScoreDelta;
        compScore += currentRound.compScoreDelta;

        console.log(`You ${currentRound.result}!!! ${currentRound.phrase}`);
        console.log(`Current Score:
        You: ${playerScore}  Bot: ${compScore}`);
        

    }
    console.log(`****************`);console.log(`****************`);console.log(`****************`);
    let overallResult = playerScore > compScore ? "Win"
        : compScore > playerScore ? "Lose"
        :"Tie";
    console.log(`FINAL Score:
        You: ${playerScore}  Bot: ${compScore}`);   
    console.log(`You ${overallResult}!!!!!!!!!!`);
    console.log("Thanks for playing!");
}

game();