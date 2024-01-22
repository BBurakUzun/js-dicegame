var array = document.querySelectorAll(".dice img");
var diceRolls = [];

console.log(performance.getEntriesByType("navigation")[0]);
if (performance.getEntriesByType("navigation")[0].type == "reload") {
    diceGame();
}

function diceGame() {
    for (var i=0; i < array.length; i++) {
        randomIndex = Math.floor(Math.random() * 6 + 1);
        array[i].setAttribute("src", "./images/dice" + randomIndex + ".png")
        diceRolls.push(randomIndex);
    }

    if (diceRolls[0] > diceRolls[1]) {
        document.querySelector("h1").innerHTML = "Player 1 Wins !";
    } 

    else if (diceRolls[0] < diceRolls[1]) {
        document.querySelector("h1").innerHTML = "Player 2 Wins !";
    }

    else {
        document.querySelector("h1").innerHTML = "DRAW";
    }
}