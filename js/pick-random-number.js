function pickNumber() {
    return Math.floor((Math.random() * 100) + 1);
}

function checkNumber() {
    let guess = document.getElementById("guess").value;
    const paragraph = document.getElementById("remaining-guesses");
    const circle = document.getElementById("circle");

    if (guess == number) {
        alert("Win!");
    }else if(remainingGuesses == 1){
        paragraph. textContent = 0;
        circle.textContent = "Try again... The number was " + number;
    }else{
        remainingGuesses = remainingGuesses - 1;
        paragraph.textContent = remainingGuesses;

        if(guess < number){
            circle.textContent = "The number is higher";
        }else{
            circle.textContent = "The number is lower";
        }
    }
}

function startNewGame() {
    remainingGuesses = 5;
    number = pickNumber(); 

    const paragraph = document.getElementById("remaining-guesses"); 
    paragraph.textContent = 5;

    const circle = document.getElementById("circle");
    circle.textContent = "Take a guess";    
}