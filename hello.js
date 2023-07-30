let playerChoice = prompt('Enter your choice:rock,paper,scissor');
let computerchoice = Math.random();
if(computerchoice < 0.34){
    computerchoice = 'rock';
}
else if(computerchoice < 0.67){
    computerchoice = 'paper';
}
else{
    computerchoice = 'scissor';
}
var compare = function(choice1,choice2){
    if(choice1 === choice2){
        return 'It"s Ties';
    }
    else if(choice1 === 'rock'){
        if(choice2 === 'paper'){
            return 'computer wins'
        }
        else{
            return 'player wins';
        }
    }
    else if(choice1 === 'paper'){
        if(choice2 === 'scissor'){
            return 'computer wins';
        }
        else{
            return 'player wins';
        }
    }
    else if(choice1 === 'scissor'){
        if(choice2 === 'rock'){
            return 'compuer wins';
        }
        else{
            return 'player wins';
        }
    }
}
document.write(computerchoice+"<br>");
document.write(playerChoice+"<br>");
document.write(compare(playerChoice,computerchoice));