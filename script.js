'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',
function(){
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess) displayMessage('Enter a number, please');
    else if(guess===secretNumber){
        displayMessage('Correct Number!!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else{
        displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
        score--;
        document.querySelector('.score').textContent = score;
        if(score<=0){
            displayMessage('You loose the game!!');
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start Guessing....');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})