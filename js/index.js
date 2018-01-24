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
	}, {
		author: "The Ancestor",
		quote: "These nightmarish creatures can be felled, they can be beaten!"
	}, {
		author: "The Ancestor",
		quote: "Curious is the trap maker's art. His efficacy unwitnessed by his own eyes."
	}, {
		author: "The Ancestor",
		quote: "The match is struck, a star is born."
	}, {
		author: "The Ancestor",
		quote: "As life ebbs, terrible vistas of emptiness reveal themselves."
	}, {
		author: "The Ancestor",
		quote: "How quickly the tide turns in battle"
	}, {
		author: "The Ancestor",
		quote: "In the face of death does true heroism show, or cowardice."
	}, {
		author: "The Ancestor",
		quote: "Adversity can foster hope, and resilience."
	}, {
		author: "The Ancestor",
		quote: "The sin is not in being outmatched - but failing to recognize it"
	}, {
		author: "The Ancestor",
		quote: "Many fall in the face of chaos. But not this one, not today"
	}, {
		author: "The Ancestor",
		quote: "Monstrous size has no intrinsic merit - unless inordinate exsanguination be considered a virtue."
	}, {
		author: "The Ancestor",
		quote: "In time, you will know the tragic extent of my failings"
	}, {
		author: "The Ancestor",
		quote: "You answered the letter. Now ... like me ... you are a part of this place."
	}, {
		author: "The Ancestor",
		quote: "A moment of valor shines brightest against a backdrop of despair"
	}, {
		author: "The Ancestor",
		quote: "There can be no hope in this hell. No hope at all."
	}, {
		author: "The Ancestor",
		quote: "A trifling victory, but a victory nonetheless"
	}, {
		author: "The Ancestor",
		quote: "Slowly, gently...that is how a life is taken."
	}, {
		author: "The Ancestor",
		quote: "Madness. Our old friend."
	}, {
		author: "The Ancestor",
		quote: "Reeling, gasping, taken over the edge into madness!"
	}, {
		author: "The Ancestor",
		quote: "A sharper sword, a stronger shield – anything to prolong a soldier’s life."
	}, {
		author: "The Ancestor",
		quote: "More blood soaks the soil, feeding the evil therein."
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
	}, {
		author: "Leonard Berstein",
		quote: "To achieve great things, two things are needed: a plan, and not quite enough time."
	}, {
		author: "Albert Einstein",
		quote: "If a man can safely drive an automobile and kiss a girl, he's not giving the kiss the attention it deserves."
	}, {
		author: "Shakespeare",
		quote: "A Horse! A Horse! My Kingdom for a Horse!"
	}, {
		author: " Buck Henry and Calder Willingham",
		quote: "Ben, I want to say one word to you, just one word: plastics."
	}, {
		author: "William Butler Yeats",
		quote: "Do not wait to strike 'til the iron is hot; but make it hot by striking."
	}, {
		author: "Oscar Wilde",
		quote: "The bureaucracy is expanding to meet the needs of the expanding bureaucracy."
	}, {
		author: "Douglass Adams",
		quote: "Nothing travels faster than light with the possible exception of bad news, which obeys its own special rules"
	}, {
		author: "Milton",
		quote: "Their rising all at once was as the sound of a thunder heard remote."
	}, {
		author: "Leonard Nimoy",
		quote: "Beep... beep... beep... beep.."
	}, {
		author: "The Bible, Psalms, 90:12",
		quote: "So teach us to number our days, so that we may apply our hearts unto wisdom."
	}, {
		author: "Malory",
		quote: "Who pulleth out this sword of this stone and anvil, is rightwise king born of all England"
	}, {
		author: "Albert Einstein",
		quote: "Compound interest is the most powerful force in the universe."
	}, {
		author: "Virgil",
		quote: "How happy are those whose walls already rise!"
	}, {
		author: "Galileo",
		quote: "Measure what is measurable, and make measurable what is not so."
	}, {
		author: "Woody Allen",
		quote: "The whole country was tied together by radio. We all experienced the same heroes and comedians and singers. They were giants."
	}, {
		author: "Henry Ford",
		quote: "Nothing is particularly hard if you divide it into small jobs."
	}, {
		author: "Horace",
		quote: "Pale Death beats equally at the poor man's gate and at the palaces of kings."
	}, {
		author: "My DM and Dwight D. Eisenhower",
		quote: "In preparing for battle I have always found that plans are useless, but planning is indispensable."
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
		$scope.randomize();
	 }
	 $scope.randomize();
	 $scope.tweet = function(){
		window.open("https://twitter.com/intent/tweet?&text=" + $scope.currentQuotes[$scope.index].quote + " ~ " + $scope.currentQuotes[$scope.index].author );
	 }
});