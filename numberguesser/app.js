let min =1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e)=>{
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

    
guessBtn.addEventListener('click', ()=>{
   let guess = parseInt(guessInput.value);
    
    if(isNaN(guess) || guess < min || guess  > max){
       setMessage(`Please enter a number between ${min} and ${max}`, 'red');
       } else
    
    if(guess === winningNum){
//       guessInput.disabled = true;
//        guessInput.style.borderColor = 'green';
//        setMessage(`${winningNum} is correct, YOU WIN`, 'green');
        gameOver(true, `${winningNum} is correct, YOU WIN`, 'green')
       }else{
           guessesLeft -= 1;
           if(!guessesLeft){
//                guessInput.disabled = true;
//        guessInput.style.borderColor = 'red';
//        setMessage(`Game Over, you Lost, The correct number was ${winningNum}`, 'red');
               gameOver(false,`Game Over, you Lost, The correct number was ${winningNum}`, 'red');
           }else{
                       guessInput.style.borderColor = 'red';
               guessInput.value = '';

               setMessage(`${guess} is not correct, ${guessesLeft} guesses Left`, 'red');
           }
       }
})    

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' :color = 'red';
     guessInput.disabled = true;
     guessInput.style.borderColor = color;
     message.style.color = color;
     setMessage(msg);
    
    guessBtn.value = "play again";
    
    guessBtn.className += 'play-again'
}

function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

console.log(winningNum);