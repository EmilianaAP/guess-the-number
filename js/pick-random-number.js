function pickNumber() {
    return Math.floor((Math.random() * 100) + 1);
}

function checkNumber() {
    let guess = document.getElementById("guess").value;
    const paragraph = document. getElementById("remaining-guesses"); 

    if (guess == number) {
        alert("Win!");
    }else if(remainingGuesses == 1){
        paragraph. textContent = 0;
        alert("Try again... The number was " + number);
    }else{
        remainingGuesses = remainingGuesses - 1;
        paragraph. textContent = remainingGuesses;

        if(guess < number){
            alert("The number is higher");
        }else{
            alert("The number is lower");
        }
    }
}

function startNewGame() {
    remainingGuesses = 5;
    number = pickNumber(); 

    const paragraph = document. getElementById("remaining-guesses"); 
    paragraph. textContent = 5;
}