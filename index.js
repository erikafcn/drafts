var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);

var array = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
document.querySelector(".img1").setAttribute("src", array[randomNumber1]);
document.querySelector(".img2").setAttribute("src", array[randomNumber2]);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins! ";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
