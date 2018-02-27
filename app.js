//game veriables 
let min = 1;
let max = 10;
let guessesLeft = 3;
let winNumber = setRandomNumber(min, max);

//user interface veriables
const game = document.querySelector("#game");
const guessInput = document.querySelector("#guess-input");
const guessButton = document.querySelector("#guess-btn");
const message = document.querySelector(".message");
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');

//assigne minNum and maxNum to ui elements
minNum.textContent = min;
maxNum.textContent = max;

//event listeners
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
      window.location.reload();
    }
  });

guessButton.addEventListener("click", playGame);

//function
function playGame() {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        showMessage(`Guess number btween ${min} and ${max}`, "red");
    } else {
        if (guess === winNumber) {
            showMessage(`Congrats, you win`, "green");
            guessInput.value = "";
            guessInput.disabled = true;
            guessButton.value = 'Play Again';
            guessButton.className += 'play-again';
        }
        else {
            guessesLeft -= 1;
            showMessage(`Try again. Chances left ${guessesLeft} `, "red");
            guessInput.value = "";
            if (guessesLeft === 0) {
                showMessage(`Game over, try again`, "red");
                guessInput.value = "";
                guessInput.disabled = true;
                guessButton.value = 'Play Again';
                guessButton.className += 'play-again';
            }
        }
    }
}

function showMessage(messagetoshow, color) {
    message.textContent = messagetoshow;
    message.style.color = color;
}

function setRandomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}