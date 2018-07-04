var $redGem = document.getElementById("redGem");
var $greenGem = document.getElementById("greenGem");
var $blueGem = document.getElementById("blueGem");
var $purpleGem = document. getElementById("purpleGem");
var $wins = document. getElementById("wins");
var $losses = document. getElementById("losses");
var $currentScore = document. getElementById("currentScore");
var $randomNumber = document. getElementById("randomNumber");

var wins = 0;
var losses = 0;
var randomNumber = "";
var currentScore = "",


// GENERATE RANDOM NUMBER BETWEEN 19-120

randomNumber = Math.floor(Math.random() * 121) + 19;

$randomNumber.textContent = randomNumber;



// CHECK FOR LOSS
function checkLoss(){
    if (currentScore > randomNumber) {
        losses++;
        $losses.textContent = losses;
    }
    checkWin();
}



//  CHECK FOR WIN
function checkWin() {
    if(currentScore = randomNumber) {
        wins++;
        $wins.textContent = wins;
       
    }
}
