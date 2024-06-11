function pickNumber() {
    return Math.floor((Math.random() * 100) + 1);
}

function checkNumber() {
    let number = pickNumber(); 
    let guess = document.getElementById("guess").value;

    if (guess == number) {
        alert("Win!");
    }else{
        alert("Try again... The number was " + number);
    }
}