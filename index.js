//get input from user
console.log('THIS IS THE GUESSING GAME');

let username = prompt('Enter your name: ')

console.log('WELCOME! '+ username);

let number = parseInt(prompt('Guess a number: '));

// guess function
function guessNumber(y) {
    let min = 1;
    let max = 2;
    let random = Math.floor(Math.random() * (max - min) + min);
    
    while(y !== random) {
      number = parseInt(prompt('Wrong! Guess again: ' );
      max++;
      random = Math.floor(Math.random() * (max - min) + min);
    }
   if(y == random) {
        console.log('You guessed the correct number.');
    }

  }

// call the function
guessNumber(number);




