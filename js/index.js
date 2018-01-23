// Refresh button 
// Add all used quotes back into the quotes array.
// Multiple quote arrays
// Variable for knowing which quotes to draw from. User clicks on the get next quote button which will check which quotes we're drawing from. If the darkestDungeonQuotes is at least 1, then get a random one from it. Remove it and add it to the used Quotes.
// Image for each array in the background


function chooseArray(newQuote) {
    console.log(chosenArray);
    chosenArray = newQuote;
    console.log(newQuote);
}
var app = angular.module('quoteApp', []);
app.controller('quoteController', function($scope) {
	$scope.chosenArray = "DarkestDungeon";
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
	}];
    $scope.Author = "The Webmaster";
    $scope.Text = "This Quote Generator pulls quotes from different sources. Click on the buttons on the nav bar to change the source. Click on the generate button to get a new quote.";
    $scope.Generate = function() {
        if ($scope.chosenArray == 'DarkestDungeon') {
            if ($scope.darkestDungeonQuotes.length != 0) {
               
				setTimeout(function() {
					$scope.$apply(function() {
						 $scope.index = Math.floor(Math.random() * $scope.darkestDungeonQuotes.length - 1) + 1;
						console.log($scope.darkestDungeonQuotes[$scope.index]);
						console.log($scope.index);
						$scope.Text = $scope.darkestDungeonQuotes[$scope.index].quote;
						$scope.Author = $scope.darkestDungeonQuotes[$scope.index].author;
					});
				}, 100);
                $scope.usedDarkestDungeonQuotes.push($scope.darkestDungeonQuotes[$scope.index]);
                $scope.darkestDungeonQuotes = $scope.darkestDungeonQuotes.slice(0, $scope.index).concat($scope.darkestDungeonQuotes.slice($scope.index + 1, $scope.darkestDungeonQuotes.length));
            } else {
                $scope.$evalAsync(function() {
                    $scope.Author = "The Webmaster";
                    $scope.Text = "No more quotes avaliable. Either click the refresh button, select another set, or go do something else. Do whatever, man."
                });
            }
        } else if (chosenArray == 'Civilization') {
            if (civilizationQuotes.length != 0) {
                console.log("Non empty array");
                var index = Math.floor(Math.random() * civilizationQuotes.length - 1) + 1;
                $scope.$evalAsync(function() {
                    $scope.Text = civilizationQuotes[index].quote;
                    $scope.Author = civilizationQuotes[index].author
                });
                usedCivilizationQuotes.push(civilizationQuotes[index]);
                civilizationQuotes = civilizationQuotes.slice(0, index).concat(civilizationQuotes.slice(index + 1, civilizationQuotes.length));
            } else {
                $scope.$evalAsync(function() {
                    $scope.Author = "The Webmaster";
                    $scope.Text = "No more quotes avaliable. Either click the refresh button, select another set, or go do something else. Do whatever, man."
                });
            }
        }
    }
});