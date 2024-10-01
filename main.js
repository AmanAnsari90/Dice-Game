let randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

let player1 = document.querySelectorAll("img")[0];

player1.setAttribute("src",randomDiceImage1);

let randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

let randomDiceImage = "images/dice" + randomNumber2 + ".png";

let player2 = document.querySelectorAll("img")[1];

player2.setAttribute("src",randomDiceImage);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Match Draw!";
}