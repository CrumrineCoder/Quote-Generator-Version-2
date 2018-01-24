// Random index, way to check.
// Image for each array in the background


function chooseArray(newQuote) {
    console.log(chosenArray);
    chosenArray = newQuote;
    console.log(newQuote);
}
var app = angular.module('quoteApp', []);
app.controller('quoteController', function($scope) {
	
	$scope.usedDarkestDungeonQuotes = [];
	$scope.usedCivilizationQuotes = [];
	$scope.darkestDungeonQuotes = [{
		author: "The Ancestor",
		quote: "Prodigious size alone does not dissuade the sharpened blade"
	}, {
		author: "The Ancestor",
		quote: "Overconfidance is a slow and insidious killer"
	}, {
		author: "The Ancestor",
		quote: "Glittering gold, trinkets and baubles... Paid for in blood."
	}];
	$scope.civilizationQuotes = [{
		author: "Ralph Waldo Emerson",
		quote: "It is one of the blessings of old friends that you can afford to be stupid with them."
	}, {
		author: "Aesop",
		quote: "The haft of the arrow had been feathered with one of the eagle's own plumes. We often give enemies the means of our own destruction."
	}, {
		author: "Kahlil Gibran",
		quote: "We only live to discover beauty. All else is a form of waiting"
	}, {
		author: "Lyall Watson",
		quote: "If the brain were so simple we could understand it, we would be so simple we couldn't."
	}, {
		author: "Tom Lehrer",
		quote: "Once the rockets are up, who cares where they come down?"
	}];
	$scope.index = 0;
	$scope.currentQuotes = $scope.darkestDungeonQuotes;
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;
	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
	$scope.randomize = function() {  
		$scope.currentQuotes = shuffle($scope.currentQuotes); 
	}
	$scope.changeArray = function(param) {  
		if(param == 'DarkestDungeon'){
			$scope.currentQuotes = $scope.darkestDungeonQuotes;
		} else if(param == 'Civilization'){
			$scope.currentQuotes = $scope.civilizationQuotes;
		}
	 }
	 $scope.tweet = function(){
		window.open("https://twitter.com/intent/tweet?&text=" + $scope.currentQuotes[$scope.index].quote + " ~ " + $scope.currentQuotes[$scope.index].author );
	 }
});