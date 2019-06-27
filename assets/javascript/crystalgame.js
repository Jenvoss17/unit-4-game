var min = 25;
var max = 60;
var score;
var targetScore;
var wins = 0;
var losses = 0;

var cardValues = [];

function startGame() {
    score = 0;
    cardValues = [];
    targetScore = Math.floor(Math.random() * (max - min) + min);
    $("#targetScore").html(targetScore);
    $("#score").html(score);
    $("#wins").html(wins);
    $("#losses").html(losses);
    getCardValues();
}

function getCardValues() {
    $("#images img").each(function (index, item) {
        cardValues.push(Math.floor(Math.random() * (6 - 1) + 1));
    })
}
function addScore(index) {
    score += cardValues[index];
    $("#score").html(score);
    checkIfWin();
}

function checkIfWin() {
    if (score == targetScore) {
        wins++;
        startGame();
    }
    if (score > targetScore) {
        losses++;
        startGame();
    }
}
startGame();

$(document).ready(function () {
    $("#images img").click(function () {
        var index = $("#images img").index(this);
        addScore(index);
    })
})