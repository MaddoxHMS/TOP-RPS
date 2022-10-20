function getComputerChoice (){
    let choices = ["Rock","Paper","Sciscors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

console.log(getComputerChoice());