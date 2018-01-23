// Refresh button 
  // Add all used quotes back into the quotes array.
// Multiple quote arrays
  // Variable for knowing which quotes to draw from. User clicks on the get next quote button which will check which quotes we're drawing from. If the darkestDungeonQuotes is at least 1, then get a random one from it. Remove it and add it to the used Quotes.
// Image for each array in the background
var quoteArray = "DarkestDungeon";
var usedDarkestDungeonQuotes = [];
var usedCivilizationQuotes = [];
var darkestDungeonQuotes = [
 {
    author: "The Ancestor",
    quote:  "Prodigious size alone does not dissuade the sharpened blade"
}, {
    author: "The Ancestor",
    quote: "Overconfidance is a slow and insidious killer"
}, {
    author: "The Ancestor",
    quote: "Glittering gold, trinkets and baubles... Paid for in blood."
}];

var civilizationQuotes = [{
    author: "Ralph Waldo Emerson",
    quote: "It is one of the blessings of old friends that you can afford to be stupid with them."
}, {
    author: "Aesop",
    quote: "The haft of the arrow had been feathered with one of the eagle's own plumes. We often give enemies the means of our own destruction."
}, {
    author: "Kahlil Gibran",
    quote: "We only live to discover beauty. All else is a form of waiting"
}];

function chooseArray(newQuote){
  quoteArray = newQuote;
}
/*
var civilizationQuotes = [{
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
}]; */
/*

// Define two variables to act as the divs for the quote area and signature area
var print = document.getElementById("quote");
var print2 = document.getElementById("signs");

function nextQuote() {
  // If there are no more quotes left in the array, show the user the last quote.
  if (quotes.length == 0) {
    noMoreQuotes();
  }

  // Generates a random variable to act as the designator of which quote to present.
  // Remove the quote from the array.
  myIndex = Math.floor(Math.random() * quotes.length - 1) + 1;
  print.innerHTML = quotes[myIndex].quote;
  print2.innerHTML = quotes[myIndex].author;
  quotes = quotes
    .slice(0, myIndex)
    .concat(quotes.slice(myIndex + 1, quotes.length));
}
// function for when the user has run through all of the quotes
function noMoreQuotes() {
  print.innerHTML = "You have read all the quotes available";
  print2.innerHTML = "Nic";
  document.getElementById("quoteGen").style = "display: none;";
  document.getElementById("test").style.display = "none";
}

nextQuote();

// Twitter BUtton
var tButton = document.getElementsByClassName("twitter-btn")[0];
// Tweet Function
function tweet() {
  // When tweet() is called, a window opens with a tweet of the quote
  window.open(
    "https://twitter.com/intent/tweet?&text=" +
      print.innerHTML +
      " ~ " +
      print2.innerHTML
  );
}

// When the button is clicked on, user is redirected to twitter.
tButton.addEventListener("click", tweet, false);

// When the user presses the spacebar, nextQuote() runs
document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    nextQuote();
  }
};
*/



// The initial streams shown to the user.
var streamNames = ["FreeCodeCamp", "BobRoss"];
// The set up of Angular
var app = angular.module('stream', []);
// This variable keeps track of which streams we're showing the user. By default we show them all streams. Other settings are 'online', and 'offline' which respectively limit the streams to those two
var display = 'all';

// A useful function for comparing the followers of streams so the streams are put in order.
function compare(a, b) {
    if (a.followers < b.followers) return 1;
    if (a.followers > b.followers) return -1;
    return 0;
}

// Checks if two streams are the same for the purpose of no doubling up on streamers.
function containsObject(obj, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].name === obj.name) {
            return true;
        } else {}
    }
    return false;
}

// Limit the streams shown to only online streams
function onlineOnly() {
    $('.online').show();
    $('.offline').hide();
    $('#onlineButton').addClass('active');
    $('#offlineButton').removeClass('active');
    $('#allButton').removeClass('active');
    display = 'online';
}
// Limit the streams shown to only offline streams
function offlineOnly() {
    $('.offline').show();
    $('.online').hide();
    $('#onlineButton').removeClass('active');
    $('#offlineButton').addClass('active');
    $('#allButton').removeClass('active');
    display = 'offline';
}
// No limits on the streams
function showAll() {
    $('.online').show();
    $('.offline').show();
    $('#onlineButton').removeClass('active');
    $('#offlineButton').removeClass('active');
    $('#allButton').addClass('active');
    display = 'all';
}
// Our angular controller. 
app.controller('streamController', function($scope) {
	// The streams to be shown tot he user
    $scope.Streams = [];
	// This variable determines if we are condensing the stream previews as they are quite large but I find them useful. 
    $scope.Condensed = false;
    // Change streanNames to those of the current Streamers and run through the entire process again to renew the data. 
    $scope.refresh = function() {
        streamNames = [];
        for (var i = 0; i < $scope.Streams.length; i++) {
            streamNames.push($scope.Streams[i].name);
        }
        $scope.Streams = [];
        getStreamData();
    }
	// On submission of the search form, add the streamer if found. 
    $('#twitchSearch').submit(function(e) {
        e.preventDefault();
        var searchValue = $("#searchBar").val();
        $.ajax({
            type: "GET",
            url: 'https://api.twitch.tv/kraken/streams/' + searchValue,
            headers: {
                "Client-ID": "qq6g00bkkiultjwkvpkewm5mkr44ock"
            },
            success: function(data) {
                displayStreams(searchValue, data);
            }
        });
    });
	// Remove a streamer from the list. 
    $scope.remove = function(item) {
        var index = $scope.Streams.indexOf(item);
        $scope.Streams.splice(index, 1);
    }
	// We get the initial data from the official Twitch API
	 function getStreamData() {
        streamNames.forEach(function(data, i) {
            $.ajax({
                type: "GET",
                url: 'https://api.twitch.tv/kraken/streams/' + streamNames[i],
                headers: {
                    "Client-ID": "qq6g00bkkiultjwkvpkewm5mkr44ock"
                },
                success: function(data) {
                    displayStreams(streamNames[i], data);
                }
            });
        });
    }
	// get the initial data
	 getStreamData();
	 // Organize the data into objects.
    function displayStreams(name, data) {
		// If they are currently streaming
        if (data.stream) {
			// Create an object of the data.
            var obj = {
                game: data.stream.game,
                viewers: data.stream.viewers,
                language: data.stream.channel.broadcaster_language,
                name: data.stream.channel.display_name,
                followers: data.stream.channel.followers,
                logo: data.stream.channel.logo,
                mature: data.stream.channel.mature,
                status: "online",
                url: data.stream.channel.url,
                preview: data.stream.preview.large,
                title: data.stream.channel.status
            };
			// If the stream hasn't already been put into the Streams array
            if (!containsObject(obj, $scope.Streams)) {
				// Add the obj to the streams array and resort it
                $scope.$apply(function() {
                    $scope.Streams.push(obj);
                    $scope.Streams.sort(compare);
                });
				// If the current display is set to offline, then we tell the user why the stream isn't going to show up
                if (display == 'offline') {
                    alert("Stream added, but only are showing Offline streams so it is not currently visible");
                    offlineOnly();
                }
			// Tell the user the stream is already added
            } else {
                alert("Stream is already added.");
            }
		// If the streamer isn't streaming. We do this because the Official Twitch API doesn't give that much data on offline streams, but the other API doesn't give as much on online streams so I have to use both. 
        } else {
            getOfflineStreamData(name);
        }
    }
   
	// Get the data for offline streams. 
    function getOfflineStreamData(name) {
        $.ajax({
            type: "GET",
            url: "https://wind-bow.glitch.me/twitch-api/channels/" + name,
            success: function(data) {
				// If the streamer is found
                if (data.status != "404") {
					// Organize an object to be put into the Streams array
                    var obj = {
                        game: data.game,
                        language: data.broadcaster_language,
                        name: data.display_name,
                        followers: data.followers,
                        logo: data.logo,
                        mature: data.mature,
                        status: "offline",
                        url: data.url,
                        preview: data.video_banner,
                        title: data.status
                    }
					// If the object isn't already in the Streams array.
                    if (!containsObject(obj, $scope.Streams)) {
						// Add the object to the Streams array and resort it
                        $scope.$apply(function() {
                            $scope.Streams.push(obj);
                            $scope.Streams.sort(compare);
                        });
						// If the display is set to only show online streams, then tell the user why their stream isn't showing up
                        if (display == 'online') {
                            alert("Stream added, but only are showing Online streams so it is not currently visible");
                            onlineOnly();
                        }
						// If the object IS already in the Streams Array, tell the user. 
                    } else {
                        alert("Stream is already added.");
                    }
				// Tell the user the streamer isn't found if we can't find it with either API
                } else {
                    alert("Streamer not found. Search again.");
                }
            }
        });
    }

  
});