/*
GAME FUNCTION:
-Player must guess a number netween a min and max
-Player gets a certain amount of guesses
-Notify player of guesses remainin
-Notify the player of the correct answer if loose
-Let player choose to play again
*/

//Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    
    //Validate 
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won
    if (guess === winningNum) {
        //Disable input
        guessInput.disabled = true;
        //Change border color
        guessInput.style.borderColor = 'green';
        //Set message
        setMessage(`${winningNum} is correct! YOU WIN!`, 'green');
    } else {

    }
});

//Set message 
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}