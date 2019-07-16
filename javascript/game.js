// Declaring Variables
var wins = 0;
var losses = 0;
//var finalScore = 0;
var score = 0;

// Generating a random number to start the game
var random = Math.floor((Math.random() * 102) + 19);

//Generating random numbers for the crystals
var gem1 = Math.floor((Math.random() * 12) + 1);
var gem2 = Math.floor((Math.random() * 12) + 1);
var gem3 = Math.floor((Math.random() * 12) + 1);
var gem4 = Math.floor((Math.random() * 12) + 1);



//Updating scores: total, wins, and losses
var updatedScore = function () {
    $('#wins').empty();
    $('#wins').append(wins);

    $('#losses').empty();
    $('#losses').append(losses);

    $('.score').empty();
    $('.score').append(score);

}

//Launching the game
var restartGame = function () {
    score = 0;
    random = Math.floor((Math.random() * 100) + 19);

    $('.randomNumber').empty();
    $('.randomNumber').append(random);

    var gem1 = Math.floor((Math.random() * 12) + 1);
    var gem2 = Math.floor((Math.random() * 12) + 1);
    var gem3 = Math.floor((Math.random() * 12) + 1);
    var gem4 = Math.floor((Math.random() * 12) + 1);


    updatedScore();

}

//Game on-the-go

var gameProcess = function () {
    if (score == random) {
        wins = wins + 1;
        alert("You win!");
        restartGame();
    } else if (score > random) {
        losses = losses + 1;
        alert("You Lost!");
        restartGame();
    } else {
        updatedScore();
    }

}

// Updating Results

$('.random').append(random);
$('.score').append(score);


//Adding numbers to final scores when crystals are clicked
$(document).ready(function () {
    $('#img1').click(function () {
        score = score + gem1;
        gameProcess();
    })

    $('#img2').click(function () {
        score = score + gem2;
        gameProcess();
    })

    $('#img3').click(function () {
        score = score + gem3;
        gameProcess();
    })

    $('#img4').click(function () {
        score = score + gem4;
        gameProcess();
    })

});
