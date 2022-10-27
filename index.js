


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



    return output;
}


function game(){
    playerScore = 0;
    compScore = 0;


    
        let pickers = document.querySelectorAll(".container > div");
        pickers.forEach(picker =>{
        picker.addEventListener("click", ()=> {
            
            playerChoice = picker.textContent;
            let currentRound = playRound(playerChoice,getComputerChoice());
            playerScore += currentRound.playerScoreDelta;
            compScore += currentRound.compScoreDelta;

            let header = document.querySelector("h1");
            header.textContent = `You ${currentRound.result}!!! ${currentRound.phrase}`
            document.getElementById("score").textContent = `You: ${playerScore}    Computer: ${compScore}`;

            if(compScore == 5){
                header.textContent = "YOU LOSE THE MATCH!"
                pickers.forEach(picker=>{
                    picker.replaceWith(picker.cloneNode());
                })
            } else if (playerScore == 5){
                header.textContent = "YOU WIN THE MATCH!"
                picker.replaceWith(picker.cloneNode());
            }
    
        })
        });




}

game();