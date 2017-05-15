$(document).ready(function() {

var wins = 0;
var losses = 0;
var compGuess;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;

var getCompGuess = function () {
	compGuess = Math.floor(Math.random() * 102) + 19;
	$("#random-number").html(compGuess);
};

var getCrystalValues = function () {
	crystalValue1 = Math.floor(Math.random() * 12) +1;
	crystalValue2 = Math.floor(Math.random() * 12) +1;
	crystalValue3 = Math.floor(Math.random() * 12) +1;
	crystalValue4 = Math.floor(Math.random() * 12) +1;

	if (crystalValue1 === crystalValue2) {
		crystalValue2 = Math.floor(Math.random() * 12) +1;
	}
	else if (crystalValue3 === crystalValue2 || crystalValue3 === crystalValue1) {
		crystalValue3 = Math.floor(Math.random() *12) +1;
	}
	else if (crystalValue4 === crystalValue3 || crystalValue4 === crystalValue2 || crystalValue4 === crystalValue1) {
		crystalValue4 = Math.floor(Math.random() * 12) +1;
	}
	console.log(crystalValue1, crystalValue2, crystalValue3, crystalValue4);
};


getCrystalValues();
getCompGuess();




//END OF SCRIPT
});