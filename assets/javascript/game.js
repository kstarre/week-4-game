$(document).ready(function() {

var wins = 0;
var losses = 0;
var compGuess;
var crystalValue1 = "";
var crystalValue2 = "";
var crystalValue3 = "";
var crystalValue4 = "";
var totalSoFar = 0;

var getCompGuess = function () {
	compGuess = Math.floor(Math.random() * 102) + 19;
	$("#random-number").html(compGuess);
};

var getCrystalValues = function () {
	crystalValue1 = Math.floor(Math.random() * 12) +1;
	crystalValue2 = Math.floor(Math.random() * 12) +1;
	crystalValue3 = Math.floor(Math.random() * 12) +1;
	crystalValue4 = Math.floor(Math.random() * 12) +1;

/*	if (crystalValue1 === crystalValue2) {
		crystalValue2 = Math.floor(Math.random() * 12) +1;
	}
	else if (crystalValue3 === crystalValue2 || crystalValue3 === crystalValue1) {
		crystalValue3 = Math.floor(Math.random() *12) +1;
	}
	else if (crystalValue4 === crystalValue3 || crystalValue4 === crystalValue2 || crystalValue4 === crystalValue1) {
		crystalValue4 = Math.floor(Math.random() * 12) +1;
	}*/
	console.log(crystalValue1, crystalValue2, crystalValue3, crystalValue4);
};

var reset = function () {
	getCrystalValues();
	getCompGuess();
	totalSoFar = 0;
	$("#current-score").html(totalSoFar);
}

getCrystalValues();
getCompGuess();


	$("#btn-1").on("click", function() {
		totalSoFar = totalSoFar + crystalValue1;
		$("#current-score").html(totalSoFar);
	});

	$("#btn-2").on("click", function() {
		totalSoFar = totalSoFar + crystalValue2;
		$("#current-score").html(totalSoFar);
	});

	$("#btn-3").on("click", function() {
		totalSoFar = totalSoFar + crystalValue3;
		$("#current-score").html(totalSoFar);
	});

	$("#btn-4").on("click", function() {
		totalSoFar = totalSoFar + crystalValue4;
		$("#current-score").html(totalSoFar);
	});

	$(".btn").on("click", function() {
		if (totalSoFar === compGuess) {
			wins++;
			$("#wins").html(wins);
			reset();
		}
		else if (totalSoFar > compGuess) {
			losses++;
			$("#losses").html(losses);
			reset();
		}
	});




//END OF SCRIPT
});