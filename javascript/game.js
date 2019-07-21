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
    $('.wins').empty();
    $('.wins').append(`Total Wins : ${wins}`);

    $('.losses').empty();
    $('.losses').append(`Total Losses : ${losses}`);

    $('.score').empty();
    $('.score').append(`Total Score : ${score}`);

}

//Launching the game
var restartGame = function () {
    score = 0;
    random = Math.floor((Math.random() * 102) + 19);

    $('.randomNumber').empty();
    $('.randomNumber').append(`Random number : ${random}`);

    updatedScore();

}

restartGame();

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
        $(".totalScore").text(`Your Total Score : ${score}`)
        gameProcess();
    })

    $('#img2').click(function () {
        score = score + gem2;
        $(".totalScore").text(`Your Total Score : ${score}`)
        gameProcess();
    })

    $('#img3').click(function () {
        score = score + gem3;
        $(".totalScore").text(`Your Total Score : ${score}`)
        gameProcess();
    })

    $('#img4').click(function () {
        score = score + gem4;
        $(".totalScore").text(`Your Total Score : ${score}`)
        gameProcess();
    })

});





// // declaring variables
// var wins = 0;
// var losses = 0;
// //var finalScore = 0;
// var score = 0;

// // generating a random number for beginning the game
// var random = Math.floor((Math.random()* 100)+ 19);

// //generating random numbers for the crystals
// var crystal1 = Math.floor((Math.random() * 12) + 1);
// var crystal2 = Math.floor((Math.random() * 12) + 1);
// var crystal3 = Math.floor((Math.random() * 12) + 1);
// var crystal4 = Math.floor((Math.random() * 12) + 1);
// console.log("1 is " +crystal1);
// console.log("2 is " +crystal2);
// console.log("3 is " +crystal3);
// console.log("4 is " +crystal4);

// //updating scores total, wins, and losses
// var updatedScore = function() {
// 	$('#wins').empty();
// 	$('#wins').append(wins);

// 	$('#losses').empty();
// 	$('#losses').append(losses);

// 	$('.score').empty();
// 	$('.score').append(score);

// }

// //when the game restarts it should..
// var restartGame = function() {
// 	score = 0;
// 	random = Math.floor((Math.random()* 100)+ 19);

// 	$('.random').empty();
// 	$('.random').append(random);

// 	var crystal1 = Math.floor((Math.random() * 12) + 1);
// 	var crystal2 = Math.floor((Math.random() * 12) + 1);
// 	var crystal3 = Math.floor((Math.random() * 12) + 1);
// 	var crystal4 = Math.floor((Math.random() * 12) + 1);


// 	updatedScore();

// }

// //game process 
// var gameProcess = function() {
// 	if(score == random) {
// 		wins = wins + 1;
// 		alert("You win!");
// 		restartGame();
// 	}
// 	else if (score > random) {
// 		losses = losses + 1;
// 		alert("You Lost!");
// 		restartGame();
// 	}
// 	else {
// 		updatedScore();
// 	}

// }

// // updating results
// $('.random').append(random);
// $('.score').append(score);


// //adding numbers to final scores when crystals are clicked
// $(document).ready(function(){
// 	$('#crystal1').click(function(){
//  		score = score + crystal1;
//  		gameProcess();
//  	})

//  	$('#crystal2').click(function(){
//  		score = score + crystal2;
//  		gameProcess();
//  	})

//  	$('#crystal3').click(function(){
//  		score = score + crystal3;
//  		gameProcess();
//  	})

//  	$('#crystal4').click(function(){
//  		score = score + crystal4;
//  		gameProcess();
//  	})

// });