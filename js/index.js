var app = angular.module('quoteApp', []);
app.controller('quoteController', function($scope) {
    // Quotes to draw from: Elder Scrolls, Civilization, Discworld, Darkest Dungeon and misc.
    $scope.elderScrollsQuotes = [{
        author: "Caius Cosades",
        quote: "No point in being part of history if you're too ignorant to understand it.",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Leveling Up",
        quote: "You plod along, putting one foot before the other, look up, and suddenly, there you are. Right where you wanted to be all along.",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Shahvee",
        quote: "Sometimes life puts you in difficult circumstances you didn't choose. But being happy or unhappy is a choice you make, and I've chosen to make the best of things that I can.",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Gwilin",
        quote: "My father taught me an important lesson many years ago. He said, 'Gwinlin, you have the whole world before you. Go out and experience it... be whatever you want to be.' So I took his advice, and here I am. This life might not look like much to you, but I'm content, and isn't that all that matters?",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Paarthurnax",
        quote: "What is better: To be born good, or to overcome one's evil nature through great effort?",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Khajit Proverb",
        quote: "May your roads lead to warm sands.",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Martin",
        quote: "I still don't know if there is a divine plan, but I've come to realize that it doesn't matter. What matters is that we act; that we do what's right when confronted with evil. That's what you did at Kvatch. It wasn't the gods that saved us, it was you.",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Gaiden Shinji",
        quote: "The best techniques are passed on by the survivors.",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Leveling Up",
        quote: "The results of hard work and dedication always look like luck. But you know you've earned every ounce of your success.",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Sheogorath",
        quote: "Change will preserve us! It is the lifeblood of the world. It will move mountains! It will mount movements!",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Nine Commands of the Eight Divines",
        quote: "Treasure the gifts of friendship. Seek joy and inspiration in the mysteries of love.",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Leveling Up",
        quote: "It's the strangest thing. Yesterday, it was hard, today, it is easy. Just a good night's sleep, and yesterday's mysteries are today's masteries.",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }, {
        author: "Merchant at Belkarth Bazaar",
        quote: "My wife told me that I need to move more product, so I took the shields out of a crate and put them in a barrel. I don't know how that's supposed to help our business, but she's always been the brains in the family.",
        type: "Elder",
        source: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind"
    }];
    $scope.civilizationQuotes = [{
        author: "Ralph Waldo Emerson",
        quote: "It is one of the blessings of old friends that you can afford to be stupid with them.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson"
    }, {
        author: "Aesop",
        quote: "The haft of the arrow had been feathered with one of the eagle's own plumes. We often give enemies the means of our own destruction.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Aesop"
    }, {
        author: "Kahlil Gibran",
        quote: "We only live to discover beauty. All else is a form of waiting.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Kahlil_Gibran"
    }, {
        author: "Lyall Watson",
        quote: "If the brain were so simple we could understand it, we would be so simple we couldn't.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Lyall_Watson"
    }, {
        author: "Tom Lehrer",
        quote: "Once the rockets are up, who cares where they come down?",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Tom_Lehrer"
    }, {
        author: "Leonard Berstein",
        quote: "To achieve great things, two things are needed: a plan, and not quite enough time.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Leonard_Bernstein"
    }, {
        author: "Albert Einstein",
        quote: "If a man can safely drive an automobile and kiss a girl, he's not giving the kiss the attention it deserves.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Albert_Einstein"
    }, {
        author: "Shakespeare",
        quote: "A Horse! A Horse! My Kingdom for a Horse!",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/William_Shakespeare"
    }, {
        author: "Buck Henry and Calder Willingham",
        quote: "Ben, I want to say one word to you, just one word: plastics.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/The_Graduate"
    }, {
        author: "William Butler Yeats",
        quote: "Do not wait to strike 'til the iron is hot; but make it hot by striking.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/W._B._Yeats"
    }, {
        author: "Oscar Wilde",
        quote: "The bureaucracy is expanding to meet the needs of the expanding bureaucracy.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Oscar_Wilde"
    }, {
        author: "Douglas Adams",
        quote: "Nothing travels faster than light with the possible exception of bad news, which obeys its own special rules.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Douglas_Adams"
    }, {
        author: "Milton",
        quote: "Their rising all at once was as the sound of a thunder heard remote.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/John_Milton"
    }, {
        author: "Leonard Nimoy",
        quote: "Beep... beep... beep... beep..",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Leonard_Nimoy"
    }, {
        author: "The Bible, Psalms, 90:12",
        quote: "So teach us to number our days, so that we may apply our hearts unto wisdom.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Bible"
    }, {
        author: "Malory",
        quote: "Who pulleth out this sword of this stone and anvil, is rightwise king born of all England.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Thomas_Malory"
    }, {
        author: "Albert Einstein",
        quote: "Compound interest is the most powerful force in the universe.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Albert_Einstein"
    }, {
        author: "Virgil",
        quote: "How happy are those whose walls already rise!",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Virgil"
    }, {
        author: "Galileo",
        quote: "Measure what is measurable, and make measurable what is not so.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Galileo_Galilei"
    }, {
        author: "Woody Allen",
        quote: "The whole country was tied together by radio. We all experienced the same heroes and comedians and singers. They were giants.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Woody_Allen"
    }, {
        author: "Henry Ford",
        quote: "Nothing is particularly hard if you divide it into small jobs.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Henry_Ford"
    }, {
        author: "Horace",
        quote: "Pale Death beats equally at the poor man's gate and at the palaces of kings.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Horace"
    }, {
        author: "My DM and Dwight D. Eisenhower",
        quote: "In preparing for battle I have always found that plans are useless, but planning is indispensable.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Dwight_D._Eisenhower"
    }, {
        author: "Martin Luther King Jr.",
        quote: "Our scientific power has outrun our spiritual power. We have guided missiles and misguided men.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr."
    }, {
        author: "Astronautics Magazine, 1937",
        quote: "A good rule for rocket experimenters to follow is this: always assume that it will explode.",
        type: "Civ",
        source: "https://arc.aiaa.org/toc/jastn/7/38"
    }, {
        author: "Socrates",
        quote: "The ancient Oracle said that I was the wisest of all the Greeks. It is because I alone, of all the Greeks, know that I know nothing.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Socrates"
    }, {
        author: "Anatole France",
        quote: "The wonder is, not that the field of stars is so vast, but that man has measured it.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Anatole_France"
    }, {
        author: "Socrates",
        quote: "There is only one good, knowledge, and one evil, ignorance.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Socrates"
    }, {
        author: "Sister Miriam Godwinson",
        quote: "The righteous need not cower before the drumbeat of human progress. Though the song of yesterday fades into the challenge of tomorrow, God still watches and judges us. Evil lurks in the datalinks as it lurked in the streets of yesteryear. But it was never the streets that were evil.",
        type: "Civ",
        source: "http://civilization.wikia.com/wiki/Lord%27s_Believers_(SMAC)"
    }, {
        author: "Anonymous",
        quote: "A man is nothing but a man, But before I let your steam drill beat me down, I'll die with the hammer in my hand.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/John_Henry_(folklore)"
    }, {
        author: "Ralph Waldo Emerson",
        quote: "Earth proudly wears the Parthenon as the best gem upon her zone.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson"
    }, {
        author: "Sun Tzu",
        quote: "The art of war teaches us to rely not on the likelihood of the enemy's not attacking, but rather on the fact that we have made our position unassailable.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Sun_Tzu"
    }, {
        author: "Christopher Dawson",
        quote: "As soon as men decide that all means are permitted to fight an evil, then their good becomes indistinguishable from the evil that they set out to destroy.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Christopher_Dawson"
    }, {
        author: "Aristotle",
        quote: "Time crumbles things. Everything grows old and is forgotten under the power of time.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Aristotle"
    }, {
        author: "James Russell Lowell",
        quote: "Things always seem fairer when we look back at them. And it is out of that inaccessible tower of the past that Longing leans and beckons.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/James_Russell_Lowell"
    }, {
        author: "Thomas Jefferson",
        quote: "The selfish spirit of commerce knows no country, and feels no passion or principle but that of gain.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Thomas_Jefferson"
    }, {
        author: "Winston S. Churchill",
        quote: "Diplomacy is the art of telling people to go to hell in such a way that they ask for directions.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Winston_Churchill"
    }, {
        author: "Theodore Roosevelt",
        quote: "Speak softly and carry a big stick; you will go far.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Theodore_Roosevelt"
    }, {
        author: "Charles Baudelaire",
        quote: "What strange phenomena we find in a great city, all we need do is stroll about with our eyes open. Life swarms with innocent monsters.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Charles_Baudelaire"
    }, {
        author: "Mark Twain",
        quote: "If you don't read the newspaper, you're uninformed. If you read the newspaper, you're mis-informed.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Mark_Twain"
    }, {
        author: "Terry Pratchett",
        quote: "You can't go around arresting the Thieves' Guild. I mean, we'd be at it all day!",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Percy Bysshe Shelley",
        quote: "And on the pedestal these words appear 'My name is Ozymandias, king of kings: Look on my works, ye Mighty and despair!'",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Percy_Bysshe_Shelley"
    }, {
        author: "Pliny the Elder",
        quote: "True glory consists in doing what deserves to be written; in writing what deserves to be read.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Pliny_the_Elder"
    }, {
        author: "The Books of Chilam Balam",
        quote: "The katun is established at Chichen Itza. The settlement of the Itza shall take place there. The quetzal shall come, the green bird shall come. Ah Kantenal shall come. It is the word of God. The Itza shall come.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Chilam_Balam"
    }, {
        author: "Robert E. Lee",
        quote: "It is well that war is so terrible, or we should grow too fond of it.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Robert_E._Lee"
    }, {
        author: "Kālidāsa",
        quote: "Yesterday is but a dream, Tomorrow is only a vision. But today well lived makes every yesterday a dream of happiness, and every tomorrow a vision of hope.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/K%C4%81lid%C4%81sa"
    }, {
        author: "Alfred Hitchcock",
        quote: "What is drama but life with dull bits cut out?",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Alfred_Hitchcock"
    }, {
        author: "The Chicago Times, 1861",
        quote: "It is a newspaper's duty to print the news and raise hell.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Chicago_Times"
    }, {
        author: "Hélder Câmara",
        quote: "When I give food to the poor, they call me a saint. When I ask why the poor have no food, they call me a communist.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/H%C3%A9lder_C%C3%A2mara"
    }, {
        author: "Joseph Addison",
        quote: "Justice is an unassailable fortress, built on the brow of a mountain which cannot be overthrown by the violence of torrents, nor demolished by the force of armies.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Joseph_Addison"
    }, {
        author: "Bhagavad Gita",
        quote: "I am become Death, the destroyer of worlds.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Bhagavad_Gita"
    }, {
        author: "George W. Bush",
        quote: "I think we can agree: The past is over.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/George_W._Bush"
    }, {
        author: "Johnny Cash",
        quote: "I fooled you. I fooled you. I got pig iron. I got pig iron. I got all pig iron.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/Johnny_Cash"
    }, {
        author: "John Dewey",
        quote: "Every great advance in science has issues from a new audacity of imagination.",
        type: "Civ",
        source: "https://en.wikipedia.org/wiki/John_Dewey"
    }];
    $scope.discworldQuotes = [
	{
		author: "Terry Pratchett",
		quote: "Always remember that the crowd that applauds your coronation is the same crowd that will applaud your beheading. People like a show.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"	
	},
	{
        author: "Terry Pratchett",
        quote: "\"The graveyards are full of people who rushed in bravely but unwisely.\" \n \"Ook.\" \n \"What did he say?\" \n \"He said 'the graveyards are full of everybody eventually'\".",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "Coffee is a way of stealing time that should by rights belong to your older self.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "It was because he wanted there to be conspirators. It was much better to imagine men in some smoky room somewhere, made mad and cynical by privilege and power, plotting over the brandy. You had to cling to this sort of image, because if you didn’t then you might have to face the fact that bad things happened because ordinary people, the kind who brushed the dog and told their children bedtime stories, were capable of then going out and doing horrible things to other ordinary people. It was so much easier to blame it on Them. It was bleakly depressing to think that They were Us. If it was Them, then nothing was anyone’s fault. If it was Us, what did that make Me? After all, I’m one of Us. I must be. I’ve certainly never thought of myself as one of Them. No one ever thinks of themselves as one of Them. We’re always one of Us. It’s Them that do the bad things.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "\"Did you really punch the president of the Assassin's Guild?\" \n \"Yes, sir.\" \n  \"Why?\" \n \"Didn't have a dagger, sir.\"",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "Build a man a fire, and he'll be warm for a day. Set a man on fire, and he'll be warm for the rest of his life.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "The senior wizard in a world of magic had the same prospects of long-term employment as a pogo stick tester in a minefield.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "'Haven't you noticed that by running away you end up in more trouble?' \n 'Yes, but you see, you can run away from that, too,' said Rincewind. 'That's the beauty of the system. Dead is only for once, but running away is for ever.' \n 'Ah, but it is said that a coward dies a thousand deaths, while a hero dies only one.' \n 'Yes, but it's the important one.'",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "YOU THINK SO? THEN TAKE THE UNIVERSE AND GRIND IT DOWN TO THE FINEST POWDER AND SIEVE IT THROUGH THE FINEST SIEVE AND THEN SHOW ME ONE ATOM OF JUSTICE, ONE MOLECULE OF MERCY. AND YET—Death waved a hand. AND YET YOU ACT AS IF THERE IS SOME IDEAL ORDER IN THE WORLD, AS IF THERE IS SOME...SOME RIGHTNESS IN THE UNIVERSE BY WHICH IT MAY BE JUDGED. \n \"Yes, but people have got to believe that, or what's the point—\" \n MY POINT EXACTLY. ",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "Personal’s not the same as important.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "Down there - he said - are people who will follow any dragon, worship any god, ignore any inequity. All out of a kind of humdrum, everyday badness. Not the really high, creative loathsomeness of the great sinners, but a sort of mass-produced darkness of the soul. Sin, you might say, without a trace of originality. They accept evil not because they say yes, but because they don't say no.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
		author: "Terry Pratchett",
        quote: "People's whole lives do pass in front of their eyes before they die. The process is called 'living'",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
		
	},{
        author: "Oath of the Watchmen, Terry Pratchett",
        quote: "I comma square bracket recruit’s name square bracket comma do solemnly swear by square bracket recruit’s deity of choice square bracket to uphold the Laws and Ordinances of the city of Ankh-Morpork comma serve the public trust comma and defend the subjects of His stroke Her bracket delete whichever is inappropriate bracket Majesty bracket name of reigning monarch bracket without fear comma favor comma or thought of personal safety semicolon to pursue evildoers and protect the innocent comma laying down my life if neccessary in the cause of said duty comma so help me bracket aforesaid deity bracket full stop Gods Save the King stroke Queen bracket delete whichever is inappropriate bracket full stop.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "I believe you find life such a problem because you think there are the good people and the bad people,' said the man [Vetinari]. 'You are wrong, of course. There are, always and only, the bad people, but some of them are on opposite sides.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "Just because you can explain it doesn't mean it's not still a miracle.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "The Patrician took a sip of his beer. \“I have told this to few people, gentlemen, and I suspect I never will again, but one day when I was a young boy on holiday in Uberwald I was walking along the bank of a stream when I saw a mother otter with her cubs. A very endearing sight, I’m sure you will agree, and even as I watched, the mother otter dived into the water and came up with a plump salmon, which she subdued and dragged on to a half-submerged log. As she ate it, while of course it was still alive, the body split and I remember to this day the sweet pinkness of its roes as they spilled out, much to the delight of the baby otters who scrambled over themselves to feed on the delicacy. One of nature’s wonders, gentlemen: mother and children dining upon mother and children. And that’s when I first learned about evil. It is built into the very nature of the universe. Every world spins in pain. If there is any kind of supreme being, I told myself, it is up to all of us to become his moral superior.\” \n  The two wizards exchanged a glance. Vetinari was staring into the depths of his beer mug and they were glad that they did not know what he saw in there.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "'But there are causes worth dying for,' said Butterfly. \n  'No, there aren't! Because you've only got one life but you can pick up another five causes on any street corner!' \n 'Good grief, how can you live with a philosophy like that?' \n Rincewind took a deep breath. 'Continuously!'.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "If you trust in yourself. . .and believe in your dreams. . .and follow your star. . . you'll still get beaten by people who spent their time working hard and learning things and weren't so lazy.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "\"You can't give her that!\" she screamed. \"It's not safe!\" \n IT'S A SWORD, said the Hogfather. THEY'RE NOT MEANT TO BE SAFE. \n \"She's a child!\" shouted Crumley. \n IT'S EDUCATIONAL. \n \"What if she cuts herself?\" \n THAT WILL BE AN IMPORTANT LESSON.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "HUMAN BEINGS ARE SO INTERESTING. DID YOU KNOW, IN A UNIVERSE SO FULL OF WONDERS, THEY'VE MANAGED TO INVENT BOREDOM? FASCINATING.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }, {
        author: "Terry Pratchett",
        quote: "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
        type: "Disc",
        source: "https://en.wikipedia.org/wiki/Terry_Pratchett"
    }];
    $scope.darkestDungeonQuotes = [{
        author: "The Ancestor",
        quote: "Prodigious size alone does not dissuade the sharpened blade.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "Overconfidence is a slow and insidious killer.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "Glittering gold, trinkets and baubles... Paid for in blood.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "These nightmarish creatures can be felled, they can be beaten!",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "Curious is the trap maker's art. His efficacy unwitnessed by his own eyes.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "The match is struck, a star is born.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "As life ebbs, terrible vistas of emptiness reveal themselves.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "How quickly the tide turns in battle.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "In the face of death does true heroism show, or cowardice.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "Adversity can foster hope, and resilience.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "The sin is not in being outmatched - but failing to recognize it.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "Many fall in the face of chaos. But not this one, not today.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "Monstrous size has no intrinsic merit - unless inordinate exsanguination be considered a virtue.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "In time, you will know the tragic extent of my failings.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "You answered the letter. Now ... like me ... you are a part of this place.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "A moment of valor shines brightest against a backdrop of despair.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "There can be no hope in this hell. No hope at all.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "A trifling victory, but a victory nonetheless.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "Slowly, gently...that is how a life is taken.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "Madness. Our old friend.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "Reeling, gasping, taken over the edge into madness!",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "A sharper sword, a stronger shield – anything to prolong a soldier’s life.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }, {
        author: "The Ancestor",
        quote: "More blood soaks the soil, feeding the evil therein.",
        type: "Darkest",
        source: "https://en.wikipedia.org/wiki/Darkest_Dungeon"
    }];
    $scope.miscQuotes = [{
        author: "Konrad from Spec Ops: The Line",
        quote: "The truth, Walker, is that you're here because you wanted to feel like something you're not. A hero.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/Spec_Ops:_The_Line"
    }, {
        author: "Colin from The Wolf Among Us",
        quote: "Life is easier with friends, Bigby, and we live a long fuckin' time. I know you like this whole Lone Wolf thing you got going for yourself, but I've seen the way you look at Snow, okay? You're not foolin' me.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Wolf_Among_Us"
    }, {
        author: "Bill from The Last of Us",
        quote: "You know, as bad as those things are, at least they're predictable. It's the normal people that scare me.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Last_of_Us"
    }, {
        author: "Joel from The Last of Us",
        quote: "I struggled for a long time with surviving. And no matter what, you keep finding something to fight for.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Last_of_Us"
    }, {
        author: "Ellie from The Last of Us",
        quote: "Everyone I have cared for has either died or left me. Everyone - fucking except for you. So don't tell me that I would be safer with someone else because the truth is I would just be more scared.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Last_of_Us"
    }, {
        author: "Riley Abel from The Last of Us",
        quote: "There are a million ways we should've died before today, and a million ways we can die before tomorrow. But we fight, for every second we get to spend with each other. Whether it's two minutes or two days, we don't give that up. I don't want to give that up.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Last_of_Us"
    }, {
        author: "Tess from The Last of Us",
        quote: "We're shitty people Joel, it's been that way for a long time.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Last_of_Us"
    }, {
        author: "Ellie from The Last of Us",
        quote: "After all we've been through. Everything that I've done. It can't be for nothing.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Last_of_Us"
    }, {
        author: "Andrew Ryan from Bioshock",
        quote: "What is the greatest lie every created? What is the most vicious obscenity ever perpetrated on mankind? Slavery? The Holocaust? Dictatorship? No. It's the tool with which all that wickedness is built: altruism. Whenever anyone wants others to do their work, they call upon their altruism. Never mind your own needs, they say, think of the needs of... of whoever. The state. The poor. Of the army, of the king, of God! The list goes on and on. How many catastrophes were launched with the words 'think of yourself'? It's the 'king and country' crowd who light the torch of destruction. It is this great inversion, this ancient lie, which has chained humanity to an endless cycle of guilt and failure. My journey to Rapture was my second exodus. In 1919, I fled a country that had traded in despotism for insanity. The Marxist revolution simply traded one lie for another. Instead of one man, the tsar, owning the work of all the people, all the people owned the work of all of the people. So, I came to America: where a man could own his own work, where a man could benefit from the brilliance of his own mind, the strength of his own muscles, the might of his own will. I had thought I had left the parasites of Moscow behind me. I had thought I had left the Marxist altruists to their collective farms and their five-year plans. But as the German fools threw themselves on Hitler's sword 'for the good of the Reich', the Americans drank deeper and deeper of the Bolshevik poison, spoon-fed to them by Roosevelt and his New Dealists. And so, I asked myself: in what country was there a place for men like me - men who refused to say \"yes\" to the parasites and the doubters, men who believed that work was sacred and property rights inviolate. And then one day, the happy answer came to me, my friends: there was no country for people like me! And that was the moment I decided... to build one.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/BioShock"
    }, {
        author: "Booker from Bioshock",
        quote: "A city at the bottom of the ocean? Ridiculous....",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/BioShock"
    }, {
        author: "Booker from Bioshock",
        quote: "One thing I've learned: if you don't draw first, you don't get to draw at all.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/BioShock"
    }, {
        author: "Rosalind Lutece from Bioshock",
        quote: "A middle C vibrates at 262 hz, no matter what the universe.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/BioShock"
    }, {
        author: "Atlas from Bioshock",
        quote: "Would you kindly?",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/BioShock"
    }, {
        author: "Andrew Ryan from Bioshock",
        quote: "A Man Choses, A Slave Obeys.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/BioShock"
    }, {
        author: "Andrew Ryan from Bioshock",
        quote: "No Gods Or Kings, Only Man.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/BioShock"
    }, {
        author: "Andrew Ryan from Bioshock",
        quote: "I am Andrew Ryan, and I'm here to ask you a question. Is a man not entitled to the sweat of his brow? \"No,\" says the man in Washington, \"it belongs to the poor.\" \"No,\" says the man in the Vatican, \"it belongs to God.\" \"No,\" says the man in Moscow, \"it belongs to everyone.\" I rejected those answers; instead, I chose something different. I chose the impossible. I chose... Rapture. A city where the artist would not fear the censor; where the scientist would not be bound by petty morality; where the great would not be constrained by the small! And with the sweat of your brow, Rapture can become your city as well.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/BioShock"
    }, {
        author: "Protomen",
        quote: "We have control \nWe keep you safe \nWe are your hope \nWe are in control.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Protomen"
    }, {
        author: "Protomen",
        quote: "The crowd had gathered there to watch him fall, to watch their hopes destroyed, \nThey watched them beat him, they watched them break him, they watched his last defense deployed, \nThere was not a man among them who would let himself be heard, but from the crowd, from their collective fear arose these broken words: \n'We are the dead!'",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Protomen"
    }, {
        author: "Protomen",
        quote: "Even here, it is not safe. \nEven this grave has been defaced. \nSomeone has written on this stone, in some angry hand... \n'HOPE RIDES ALONE!'",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Protomen"
    }, {
        author: "Protomen",
        quote: "You have heard me, tell this story \nMany times before you sleep. \nNo matter how dark this City gets, \n Even now, there's hope for man.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Protomen"
    }, {
        author: "Protomen",
        quote: "If these people... tell this story... to their children... as they sleep... then maybe someday, they'll see a hero... is just a man... who knows he is free.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Protomen"
    }, {
        author: "Protomen",
        quote: "They've waited so long for this day, \nSomeone to take the death away! \nNo son would ever have to say \nMy father worked into his grave...",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Protomen"
    }, {
        author: "Protomen",
        quote: "If a shadow blocks out the sun, there will be Light! \nIf it stays until the sun has set, there will be Light! \nIf the sun never shows its face again, there will be Light! \nNo matter how dark this City gets, there will be...",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Protomen"
    }, {
        author: "Protomen",
        quote: "I will not be told where to stand! I will not be told what to say! \nNot by man or machine, not by you, not by anyone tonight! \nYou've got to do better than fear. \nYou've got to step out of the shadows and fight! \nAnd when they see your face again, \n they will know what it means to have fear dragged out into the light.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Protomen"
    }, {
        author: "Protomen",
        quote: "I've got this burning like my veins are filled with nothing but gasoline! \nAnd with a spark it's gonna be the biggest fire they've ever seen!",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/The_Protomen"
    }, {
        author: "Delita from Final Fantasy",
        quote: "Don't blame me. Blame yourself or God.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/Final_Fantasy"
    }, {
        author: "Kefka from Final Fantasy",
        quote: "You sounds like chapters from a self-help booklet!",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/Final_Fantasy"
    }, {
        author: "Delita from Final Fantasy",
        quote: "Disrupt the \"order\"? This \"order\" you talk about is just a matter of your own convienence!! Using \"God\" as an \"order\" to control the people is absurd. You have no right to take advantage of the innocent.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/Final_Fantasy"
    }, {
        author: "Wiegraf from Final Fantasy",
        quote: "You don't understand how hard it is to fulfill your ideals. Even if your ideals are great, they're just dreams if you can't fulfill them! So how can you fulfill them? You need power! That's the politics of the world! I can see it clearly now! You can't fulfill your dreams without power! You say I'm a dog of the church! Go ahead!! I don't care. You can all despise me, but I'll be laughing at the end! You'll all submit to me!",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/Final_Fantasy"
    }, {
        author: "Wiegraf from Final Fantasy",
        quote: "Two lions are fighting for power after the king dies... Both want to know who their allies are. But, it's hard to read strangers' minds. So, why not kill 'em all and bring in your own people?",
        type: "Misc",
        source: " "
    }, {
        author: "Wiegraf from Final Fantasy",
        quote: "Ha! No spoony bard could spin a sweeter tale! You say your brothers do not want this fight? Tears then, for the world you see is one beyond my weary sight!",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/Final_Fantasy"
    }, {
        author: "Spike from Cowboy Bebop",
        quote: "Bang.",
        type: "Misc",
        source: " "
    }, {
        author: "Jet Black from Cowboy Bebop",
        quote: "Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don't desire, but they're inevitable, we have to face them. It's what being human is all about.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/Cowboy_Bebop"
    }, {
        author: "Title Card from Cowboy Bebop",
        quote: "See You Space Cowboy...",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/Cowboy_Bebop"
    }, {
        author: "Faye Valentine from Cowboy Bebop",
        quote: "They often say that humans can’t live alone. But you can live pretty long by yourself. Instead of feeling alone in a group, it’s better to be alone in your solitude.",
        type: "Misc",
        source: "https://en.wikipedia.org/wiki/Cowboy_Bebop"
    }]
    $scope.elder = true;
    $scope.civ = true;
    $scope.disc = true;
    $scope.darkest = true;
    $scope.misc = true;
    $scope.filters = 5;
    // Variable to determine which Quote to show
    $scope.index = 0;
    $scope.instruction = {
        author: "Nicolas Crumrine",
        quote: "Click on 'Get New Quote' above to get started. The five images above act as filters for various sources I pulled quotes from which can be turned on and off with a button click. The miscellaneous ('?') section is for sources that I didn't pull enough quotes from to warrant making a separate button. The order will be randomized and will loop over itself."
    };
    // Set of quotes to show to the user. The starting one is just the instructions on how to use the App. Then add the rest.
    $scope.currentQuotes = [$scope.instruction];
    $scope.currentQuotes = $scope.currentQuotes.concat($scope.elderScrollsQuotes);
    $scope.currentQuotes = $scope.currentQuotes.concat($scope.civilizationQuotes);
    $scope.currentQuotes = $scope.currentQuotes.concat($scope.discworldQuotes);
    $scope.currentQuotes = $scope.currentQuotes.concat($scope.darkestDungeonQuotes);
    $scope.currentQuotes = $scope.currentQuotes.concat($scope.miscQuotes);
    // Function stolen from the internet that will shuffle an array. Used for changing array of quotes.
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
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
    // Use the randomize functin to take the currentQuotes and randomize it. 
    $scope.randomize = function() {
        $scope.currentQuotes = shuffle($scope.currentQuotes);
    }
    $scope.checkFilters = function() {
        if ($scope.filters == 0) {
            $scope.currentQuotes = [$scope.instruction];
            $scope.index = 0;
        } else {
            $scope.currentQuotes = $scope.currentQuotes.filter(function(el) {
                return el.author !== "Nicolas Crumrine";
            });
        }
    }
    // On space bar, simulate the 'generate new quote' button.
    document.body.onkeyup = function(e) {
        if (e.keyCode == 32) {
            $scope.$apply(function() {
                $scope.index = ($scope.index + 1) % $scope.currentQuotes.length;
            });
        }
    };
    // Change arrays of quotes to draw from and show which one is active.
    $scope.changeArray = function(param) {
        if (param == 'ElderScrolls') {
            if ($scope.elder) {
                // Remove all matching quotes from currentArray.
                $scope.currentQuotes = $scope.currentQuotes.filter(function(a) {
                    return a.type !== 'Elder'
                });
                $scope.filters--;
                $('#elderScrolls').removeClass('active');
            } else {
                // Add the array to currentArray and randomize the array.
                $scope.currentQuotes = $scope.currentQuotes.concat($scope.elderScrollsQuotes);
                $scope.filters++;
                $('#elderScrolls').addClass('active');
            }
            $scope.elder = !$scope.elder;
        } else if (param == 'Civilization') {
            if ($scope.civ) {
                // Remove all matching quotes from currentArray.
                $scope.currentQuotes = $scope.currentQuotes.filter(function(a) {
                    return a.type !== 'Civ'
                });
                $scope.filters--;
                $('#civilization').removeClass('active');
            } else {
                // Add the array to currentArray and randomize the array.
                $scope.currentQuotes = $scope.currentQuotes.concat($scope.civilizationQuotes);
                $scope.filters++;
                $('#civilization').addClass('active');
            }
            $scope.civ = !$scope.civ;
        } else if (param == 'Discworld') {
            if ($scope.disc) {
                // Remove all matching quotes from currentArray.
                $scope.currentQuotes = $scope.currentQuotes.filter(function(a) {
                    return a.type !== 'Disc'
                });
                $scope.filters--;
                $('#discworld').removeClass('active');
            } else {
                // Add the array to currentArray and randomize the array.
                $scope.currentQuotes = $scope.currentQuotes.concat($scope.discworldQuotes);
                $scope.filters++;
                $('#discworld').addClass('active');
            }
            $scope.disc = !$scope.disc;
        } else if (param == 'DarkestDungeon') {
            if ($scope.darkest) {
                // Remove all matching quotes from currentArray.
                $scope.currentQuotes = $scope.currentQuotes.filter(function(a) {
                    return a.type !== 'Darkest'
                });
                $scope.filters--;
                $('#darkestDungeon').removeClass('active');
            } else {
                // Add the array to currentArray and randomize the array.
                $scope.currentQuotes = $scope.currentQuotes.concat($scope.darkestDungeonQuotes);
                $scope.filters++;
                $('#darkestDungeon').addClass('active');
            }
            $scope.darkest = !$scope.darkest;
        } else if (param == 'Misc') {
            if ($scope.misc) {
                // Remove all matching quotes from currentArray.
                $scope.currentQuotes = $scope.currentQuotes.filter(function(a) {
                    return a.type !== 'Misc'
                });
                $scope.filters--;
                $('#misc').removeClass('active');
            } else {
                // Add the array to currentArray and randomize the array.
                $scope.currentQuotes = $scope.currentQuotes.concat($scope.miscQuotes);
                $scope.filters++;
                $('#misc').addClass('active');
            }
            $scope.misc = !$scope.misc;
        }
        // Also randomize the order of the array of quotes.
        $scope.randomize();
    }
    // Tweet button: opens the current quote in twitter's tweet intent.
    $scope.tweet = function() {
        window.open("https://twitter.com/intent/tweet?&text=" + $scope.currentQuotes[$scope.index].quote + " ~ " + $scope.currentQuotes[$scope.index].author);
    }
});