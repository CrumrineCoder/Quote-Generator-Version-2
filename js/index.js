var app = angular.module('quoteApp', []);
app.controller('quoteController', function($scope) {
	// Quotes to draw from: Darkest Dungeon, Civilization, Elder Scrolls, Discworld, and misc.
	$scope.darkestDungeonQuotes = [{
		author: "The Ancestor",
		quote: "Prodigious size alone does not dissuade the sharpened blade."
	}, {
		author: "The Ancestor",
		quote: "Overconfidence is a slow and insidious killer."
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
		quote: "How quickly the tide turns in battle."
	}, {
		author: "The Ancestor",
		quote: "In the face of death does true heroism show, or cowardice."
	}, {
		author: "The Ancestor",
		quote: "Adversity can foster hope, and resilience."
	}, {
		author: "The Ancestor",
		quote: "The sin is not in being outmatched - but failing to recognize it."
	}, {
		author: "The Ancestor",
		quote: "Many fall in the face of chaos. But not this one, not today."
	}, {
		author: "The Ancestor",
		quote: "Monstrous size has no intrinsic merit - unless inordinate exsanguination be considered a virtue."
	}, {
		author: "The Ancestor",
		quote: "In time, you will know the tragic extent of my failings."
	}, {
		author: "The Ancestor",
		quote: "You answered the letter. Now ... like me ... you are a part of this place."
	}, {
		author: "The Ancestor",
		quote: "A moment of valor shines brightest against a backdrop of despair."
	}, {
		author: "The Ancestor",
		quote: "There can be no hope in this hell. No hope at all."
	}, {
		author: "The Ancestor",
		quote: "A trifling victory, but a victory nonetheless."
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
		quote: "We only live to discover beauty. All else is a form of waiting."
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
		author: "Buck Henry and Calder Willingham",
		quote: "Ben, I want to say one word to you, just one word: plastics."
	}, {
		author: "William Butler Yeats",
		quote: "Do not wait to strike 'til the iron is hot; but make it hot by striking."
	}, {
		author: "Oscar Wilde",
		quote: "The bureaucracy is expanding to meet the needs of the expanding bureaucracy."
	}, {
		author: "Douglass Adams",
		quote: "Nothing travels faster than light with the possible exception of bad news, which obeys its own special rules."
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
		quote: "Who pulleth out this sword of this stone and anvil, is rightwise king born of all England."
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
	}, {
		author: "Martin Luther King Jr.",
		quote: "Our scientific power has outrun our spiritual power. We have guided missiles and misguided men."
	}, {
		author: "Astronautics Magazine, 1937",
		quote: "A good rule for rocket experimenters to follow is this: always assume that it will explode."
	}, {
		author: "Socrates",
		quote: "The ancient Oracle said that I was the wisest of all the Greeks. It is because I alone, of all the Greeks, know that I know nothing."
	}, {
		author: "Anatole France",
		quote: "The wonder is, not that the field of stars is so vast, but that man has measured it."
	}, {
		author: "Socrates",
		quote: "There is only one good, knowledge, and one evil, ignorance."
	}, {
		author: "Sister Miriam Godwinson",
		quote: "The righteous need not cower before the drumbeat of human progress. Though the song of yesterday fades into the challenge of tomorrow, God still watches and judges us. Evil lurks in the datalinks as it lurked in the streets of yesteryear. But it was never the streets that were evil."
	}, {
		author: "Anonymous",
		quote: "A man is nothing but a man, But before I let your steam drill beat me down, I'll die with the hammer in my hand."
	}, {
		author: "Ralph Waldo Emerson",
		quote: "Earth proudly wears the Parthenon as the best gem upon her zone."
	}, {
		author: "Sun Tzu",
		quote: "The art of war teaches us to rely not on the likelihood of the enemy's not attacking, but rather on the fact that we have made our position unassailable."
	}, {
		author: "Christopher Dawson",
		quote: "As soon as men decide that all means are permitted to fight an evil, then their good becomes indistinguishable from the evil that they set out to destroy."
	}, {
		author: "Aristotle",
		quote: "Time crumbles things. Everything grows old and is forgotten under the power of time."
	}, {
		author: "James Russell Lowell",
		quote: "Things always seem fairer when we look back at them. And it is out of that inaccessible tower of the past that Longing leans and beckons."
	}, {
		author: "Thomas Jefferson",
		quote: "The selfish spirit of commerce knows no country, and feels no passion or principle but that of gain."
	}, {
		author: "Winston S. Churchill",
		quote: "Diplomacy is the art of telling people to go to hell in such a way that they ask for directions."
	}, {
		author: "Theodore Roosevelt",
		quote: "Speak softly and carry a big stick; you will go far."
	}, {
		author: "Charles Baudelaire",
		quote: "What strange phenomena we find in a great city, all we need do is stroll about with our eyes open. Life swarms with innocent monsters."
	}, {
		author: "Mark Twain",
		quote: "If you don't read the newspaper, you're uninformed. If you read the newspaper, you're mis-informed."
	}, {
		author: "Terry Pratchett",
		quote: "You can't go around arresting the Thieves' Guild. I mean, we'd be at it all day!"
	}, {
		author: "Percy Bysshe Shelley",
		quote: "And on the pedestal these words appear 'My name is Ozymandias, king of kings: Look on my works, ye Mighty and despair!'"
	}, {
		author: "Pliny the Elder",
		quote: "True glory consists in doing what deserves to be written; in writing what deserves to be read."
	}, {
		author: "The Books of Chilam Balam",
		quote: "The katun is established at Chichen Itza. The settlement of the Itza shall take place there. The quetzal shall come, the green bird shall come. Ah Kantenal shall come. It is the word of God. The Itza shall come."
	}, {
		author: "Robert E. Lee",
		quote: "It is well that war is so terrible, or we should grow too fond of it."
	}, {
		author: "Kālidāsa",
		quote: "Yesterday is but a dream, Tomorrow is only a vision. But today well lived makes every yesterday a dream of happiness, and every tomorrow a vision of hope."
	}, {
		author: "Alfred Hitchcock",
		quote: "What is drama but life with dull bits cut out?"
	}, {
		author: "The Chicago Times, 1861",
		quote: "It is a newspaper's duty to print the news and raise hell."
	}, {
		author: "Hélder Câmara",
		quote: "When I give food to the poor, they call me a saint. When I ask why the poor have no food, they call me a communist."
	}, {
		author: "Joseph Addison",
		quote: "Justice is an unassailable fortress, built on the brow of a mountain which cannot be overthrown by the violence of torrents, nor demolished by the force of armies."
	}, {
		author: "Bhagavad Gita",
		quote: "I am become Death, the destroyer of worlds."
	}, {
		author: "George W. Bush",
		quote: "I think we can agree: The past is over."
	}, {
		author: "Johnny Cash",
		quote: "I fooled you. I fooled you. I got pig iron. I got pig iron. I got all pig iron."
	}, {
		author: "John Dewey",
		quote: "Every great advance in science has issues from a new audacity of imagination."
	}];
	
	$scope.elderScrollsQuotes = [{
		author: "Caius Cosades",
		quote: "No point in being part of history if you're too ignorant to understand it."
	}, {
		author: "Leveling Up",
		quote: "You plod along, putting one foot before the other, look up, and suddenly, there you are. Right where you wanted to be all along."
	}, {
		author: "Shahvee",
		quote: "Sometimes life puts you in difficult circumstances you didn't choose. But being happy or unhappy is a choice you make, and I've chosen to make the best of things that I can."
	}, {
		author: "Gwilin",
		quote: "My father taught me an important lesson many years ago. He said, 'Gwinlin, you have the whole world before you. Go out and experience it... be whatever you want to be.' So I took his advice, and here I am. This life might not look like much to you, but I'm content, and isn't that all that matters?"
	}, {
		author: "Paarthurnax",
		quote: "What is better: To be born good, or to overcome one's evil nature through great effort?"
	}, {
		author: "Khajit Proverb",
		quote: "May your roads lead to warm sands."
	}, {
		author: "Martin",
		quote: "I still don't know if there is a divine plan, but I've come to realize that it doesn't matter. What matters is that we act; that we do what's right when confronted with evil. That's what you did at Kvatch. It wasn't the gods that saved us, it was you."
	}, {
		author: "Gaiden Shinji",
		quote: "The best techniques are passed on by the survivors."
	}, {
		author: "Leveling Up",
		quote: "The results of hard work and dedication always look like luck. But you know you've earned every ounce of your success."
	}, {
		author: "Sheogorath",
		quote: "Change will preserve us! It is the lifeblood of the world. It will move mountains! It will mount movements!"
	}, {
		author: "Nine Commands of the Eight Divines",
		quote: "Treasure the gifts of friendship. Seek joy and inspiration in the mysteries of love."
	}, {
		author: "Leveling Up",
		quote: "It's the strangest thing. Yesterday, it was hard, today, it is easy. Just a good night's sleep, and yesterday's mysteries are today's masteries."
	}, {
		author: "Merchant at Belkarth Bazaar",
		quote: "My wife told me that I need to move more product, so I took the shields out of a crate and put them in a barrel. I don't know how that's supposed to help our business, but she's always been the brains in the family."
	}];
	
	$scope.discworldQuotes = [{
		author: "Terry Pratchett",
		quote: "\"The graveyards are full of people who rushed in bravely but unwisely.\" \n \"Ook.\" \n \"What did he say?\" \n \"He said 'the graveyards are full of everybody eventually'\"."
	}, {
		author: "Terry Pratchett",
		quote: "Coffee is a way of stealing time that should by rights belong to your older self."
	}, {
		author: "Terry Pratchett",
		quote: "It was because he wanted there to be conspirators. It was much better to imagine men in some smoky room somewhere, made mad and cynical by privilege and power, plotting over the brandy. You had to cling to this sort of image, because if you didn’t then you might have to face the fact that bad things happened because ordinary people, the kind who brushed the dog and told their children bedtime stories, were capable of then going out and doing horrible things to other ordinary people. It was so much easier to blame it on Them. It was bleakly depressing to think that They were Us. If it was Them, then nothing was anyone’s fault. If it was Us, what did that make Me? After all, I’m one of Us. I must be. I’ve certainly never thought of myself as one of Them. No one ever thinks of themselves as one of Them. We’re always one of Us. It’s Them that do the bad things."
	}, {
		author: "Terry Pratchett",
		quote: "\"Did you really punch the president of the Assassin's Guild?\" \n \"Yes, sir.\" \n  \"Why?\" \n \"Didn't have a dagger, sir.\""
	}, {
		author: "Terry Pratchett",
		quote: "Build a man a fire, and he'll be warm for a day. Set a man on fire, and he'll be warm for the rest of his life."
	}, {
		author: "Terry Pratchett",
		quote: "The senior wizard in a world of magic had the same prospects of long-term employment as a pogo stick tester in a minefield."
	}, {
		author: "Terry Pratchett",
		quote: "YOU THINK SO? THEN TAKE THE UNIVERSE AND GRIND IT DOWN TO THE FINEST POWDER AND SIEVE IT THROUGH THE FINEST SIEVE AND THEN SHOW ME ONE ATOM OF JUSTICE, ONE MOLECULE OF MERCY. AND YET—Death waved a hand. AND YET YOU ACT AS IF THERE IS SOME IDEAL ORDER IN THE WORLD, AS IF THERE IS SOME...SOME RIGHTNESS IN THE UNIVERSE BY WHICH IT MAY BE JUDGED. \n \"Yes, but people have got to believe that, or what's the point—\" \n MY POINT EXACTLY. "
	}, {
		author: "Terry Pratchett",
		quote: "Personal’s not the same as important."
	}, {
		author: "Terry Pratchett",
		quote: "Down there - he said - are people who will follow any dragon, worship any god, ignore any inequity. All out of a kind of humdrum, everyday badness. Not the really high, creative loathsomeness of the great sinners, but a sort of mass-produced darkness of the soul. Sin, you might say, without a trace of originality. They accept evil not because they say yes, but because they don't say no."
	}, {
		author: "Oath of the Watchmen, Terry Pratchett",
		quote: "I comma square bracket recruit’s name square bracket comma do solemnly swear by square bracket recruit’s deity of choice square bracket to uphold the Laws and Ordinances of the city of Ankh-Morpork comma serve the public trust comma and defend the subjects of His stroke Her bracket delete whichever is inappropriate bracket Majesty bracket name of reigning monarch bracket without fear comma favor comma or thought of personal safety semicolon to pursue evildoers and protect the innocent comma laying down my life if neccessary in the cause of said duty comma so help me bracket aforesaid deity bracket full stop Gods Save the King stroke Queen bracket delete whichever is inappropriate bracket full stop."
	}, {
		author: "Terry Pratchett",
		quote: "I believe you find life such a problem because you think there are the good people and the bad people,' said the man [Vetinari]. 'You are wrong, of course. There are, always and only, the bad people, but some of them are on opposite sides."
	}, {
		author: "Terry Pratchett",
		quote: "Just because you can explain it doesn't mean it's not still a miracle."
	}, {
		author: "Terry Pratchett",
		quote: "The Patrician took a sip of his beer. \“I have told this to few people, gentlemen, and I suspect I never will again, but one day when I was a young boy on holiday in Uberwald I was walking along the bank of a stream when I saw a mother otter with her cubs. A very endearing sight, I’m sure you will agree, and even as I watched, the mother otter dived into the water and came up with a plump salmon, which she subdued and dragged on to a half-submerged log. As she ate it, while of course it was still alive, the body split and I remember to this day the sweet pinkness of its roes as they spilled out, much to the delight of the baby otters who scrambled over themselves to feed on the delicacy. One of nature’s wonders, gentlemen: mother and children dining upon mother and children. And that’s when I first learned about evil. It is built into the very nature of the universe. Every world spins in pain. If there is any kind of supreme being, I told myself, it is up to all of us to become his moral superior.\” \n  The two wizards exchanged a glance. Vetinari was staring into the depths of his beer mug and they were glad that they did not know what he saw in there."
	}, {
		author: "Terry Pratchett",
		quote: "'But there are causes worth dying for,' said Butterfly. \n  'No, there aren't! Because you've only got one life but you can pick up another five causes on any street corner!' \n 'Good grief, how can you live with a philosophy like that?' \n Rincewind took a deep breath. 'Continuously!'."
	}, {
		author: "Terry Pratchett",
		quote: "If you trust in yourself. . .and believe in your dreams. . .and follow your star. . . you'll still get beaten by people who spent their time working hard and learning things and weren't so lazy."
	}, {
		author: "Terry Pratchett",
		quote: "\"You can't give her that!\" she screamed. \"It's not safe!\" \n IT'S A SWORD, said the Hogfather. THEY'RE NOT MEANT TO BE SAFE. \n \"She's a child!\" shouted Crumley. \n IT'S EDUCATIONAL. \n \"What if she cuts herself?\" \n THAT WILL BE AN IMPORTANT LESSON."
	}, {
		author: "Terry Pratchett",
		quote: "HUMAN BEINGS ARE SO INTERESTING. DID YOU KNOW, IN A UNIVERSE SO FULL OF WONDERS, THEY'VE MANAGED TO INVENT BOREDOM? FASCINATING."
	}, {
		author: "Terry Pratchett",
		quote: "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it."
	}];
	
	$scope.miscQuotes = [{
		author: "Konrad from Spec Ops: The Line",
		quote: "The truth, Walker, is that you're here because you wanted to feel like something you're not. A hero."
	}, {
		author: "Colin from The Wolf Among Us",
		quote: "Life is easier with friends, Bigby, and we live a long fuckin' time. I know you like this whole Lone Wolf thing you got going for yourself, but I've seen the way you look at Snow, okay? You're not foolin' me."
	}, {
		author: "Bill from The Last of Us",
		quote: "You know, as bad as those things are, at least they're predictable. It's the normal people that scare me."
	}, {
		author: "Joel from The Last of Us",
		quote: "I struggled for a long time with surviving. And no matter what, you keep finding something to fight for."
	}, {
		author: "Ellie from The Last of Us",
		quote: "Everyone I have cared for has either died or left me. Everyone - fucking except for you. So don't tell me that I would be safer with someone else because the truth is I would just be more scared."
	}, {
		author: "Riley Abel from The Last of Us",
		quote: "There are a million ways we should've died before today, and a million ways we can die before tomorrow. But we fight, for every second we get to spend with each other. Whether it's two minutes or two days, we don't give that up. I don't want to give that up."
	}, {
		author: "Tess from The Last of Us",
		quote: "We're shitty people Joel, it's been that way for a long time."
	}, {
		author: "Ellie from The Last of Us",
		quote: "After all we've been through. Everything that I've done. It can't be for nothing."
	}, {
		author: "Andrew Ryan from Bioshock",
		quote: "What is the greatest lie every created? What is the most vicious obscenity ever perpetrated on mankind? Slavery? The Holocaust? Dictatorship? No. It's the tool with which all that wickedness is built: altruism. Whenever anyone wants others to do their work, they call upon their altruism. Never mind your own needs, they say, think of the needs of... of whoever. The state. The poor. Of the army, of the king, of God! The list goes on and on. How many catastrophes were launched with the words 'think of yourself'? It's the 'king and country' crowd who light the torch of destruction. It is this great inversion, this ancient lie, which has chained humanity to an endless cycle of guilt and failure. My journey to Rapture was my second exodus. In 1919, I fled a country that had traded in despotism for insanity. The Marxist revolution simply traded one lie for another. Instead of one man, the tsar, owning the work of all the people, all the people owned the work of all of the people. So, I came to America: where a man could own his own work, where a man could benefit from the brilliance of his own mind, the strength of his own muscles, the might of his own will. I had thought I had left the parasites of Moscow behind me. I had thought I had left the Marxist altruists to their collective farms and their five-year plans. But as the German fools threw themselves on Hitler's sword 'for the good of the Reich', the Americans drank deeper and deeper of the Bolshevik poison, spoon-fed to them by Roosevelt and his New Dealists. And so, I asked myself: in what country was there a place for men like me - men who refused to say \"yes\" to the parasites and the doubters, men who believed that work was sacred and property rights inviolate. And then one day, the happy answer came to me, my friends: there was no country for people like me! And that was the moment I decided... to build one."
	}, {
		author: "Booker from Bioshock",
		quote: "A city at the bottom of the ocean? Ridiculous...."
	}, {
		author: "Booker from Bioshock",
		quote: "One thing I've learned: if you don't draw first, you don't get to draw at all."
	}, {
		author: "Rosalind Lutece from Bioshock",
		quote: "A middle C vibrates at 262 hz, no matter what the universe."
	}, {
		author: "Atlas from Bioshock",
		quote: "Would you kindly?"
	}, {
		author: "Andrew Ryan from Bioshock",
		quote: "A Man Choses, A Slave Obeys."
	}, {
		author: "Andrew Ryan from Bioshock",
		quote: "No Gods Or Kings, Only Man."
	}, {
		author: "Andrew Ryan from Bioshock",
		quote: "I am Andrew Ryan, and I'm here to ask you a question. Is a man not entitled to the sweat of his brow? \"No,\" says the man in Washington, \"it belongs to the poor.\" \"No,\" says the man in the Vatican, \"it belongs to God.\" \"No,\" says the man in Moscow, \"it belongs to everyone.\" I rejected those answers; instead, I chose something different. I chose the impossible. I chose... Rapture. A city where the artist would not fear the censor; where the scientist would not be bound by petty morality; where the great would not be constrained by the small! And with the sweat of your brow, Rapture can become your city as well."
	}, {
		author: "Protomen",
		quote: "We have control \nWe keep you safe \nWe are your hope \nWe are in control."
	}, {
		author: "Protomen",
		quote: "The crowd had gathered there to watch him fall, to watch their hopes destroyed, \nThey watched them beat him, they watched them break him, they watched his last defense deployed, \nThere was not a man among them who would let himself be heard, but from the crowd, from their collective fear arose these broken words: \n'We are the dead!'"
	}, {
		author: "Protomen",
		quote: "Even here, it is not safe. \nEven this grave has been defaced. \nSomeone has written on this stone, in some angry hand... \n'HOPE RIDES ALONE!'"
	}, {
		author: "Protomen",
		quote: "You have heard me, tell this story \nMany times before you sleep. \nNo matter how dark this City gets, \n Even now, there's hope for man."
	}, {
		author: "Protomen",
		quote: "If these people... tell this story... to their children... as they sleep... then maybe someday, they'll see a hero... is just a man... who knows he is free."
	}, {
		author: "Protomen",
		quote: "They've waited so long for this day, \nSomeone to take the death away! \nNo son would ever have to say \nMy father worked into his grave..."
	}, {
		author: "Protomen",
		quote: "If a shadow blocks out the sun, there will be Light! \nIf it stays until the sun has set, there will be Light! \nIf the sun never shows its face again, there will be Light! \nNo matter how dark this City gets, there will be..."
	}, {
		author: "Protomen",
		quote: "I will not be told where to stand! I will not be told what to say! \nNot by man or machine, not by you, not by anyone tonight! \nYou've got to do better than fear. \nYou've got to step out of the shadows and fight! \nAnd when they see your face again, \n they will know what it means to have fear dragged out into the light."
	}, {
		author: "Protomen",
		quote: "I've got this burning like my veins are filled with nothing but gasoline! \nAnd with a spark it's gonna be the biggest fire they've ever seen!"
	}, {
		author: "Delita from Final Fantasy",
		quote: "Don't blame me. Blame yourself or God."
	}, {
		author: "Kefka from Final Fantasy",
		quote: "You sounds like chapters from a self-help booklet!"
	}, {
		author: "Delita from Final Fantasy",
		quote: "Disrupt the \"order\"? This \"order\" you talk about is just a matter of your own convienence!! Using \"God\" as an \"order\" to control the people is absurd. You have no right to take advantage of the innocent."
	}, {
		author: "Wiegraf from Final Fantasy",
		quote: "You don't understand how hard it is to fulfill your ideals. Even if your ideals are great, they're just dreams if you can't fulfill them! So how can you fulfill them? You need power! That's the politics of the world! I can see it clearly now! You can't fulfill your dreams without power! You say I'm a dog of the church! Go ahead!! I don't care. You can all despise me, but I'll be laughing at the end! You'll all submit to me!"
	}, {
		author: "Wiegraf from Final Fantasy",
		quote: "Two lions are fighting for power after the king dies... Both want to know who their allies are. But, it's hard to read strangers' minds. So, why not kill 'em all and bring in your own people?"
	}, {
		author: "Wiegraf from Final Fantasy",
		quote: "Ha! No spoony bard could spin a sweeter tale! You say your brothers do not want this fight? Tears then, for the world you see is one beyond my weary sight!"
	}, {
		author: "Spike from Cowboy Bebop",
		quote: "Bang."
	}, {
		author: "Jet Black from Cowboy Bebop",
		quote: "Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don't desire, but they're inevitable, we have to face them. It's what being human is all about."
	}, {
		author: "Title Card from Cowboy Bebop",
		quote: "See You Space Cowboy..."
	}, {
		author: "Faye Valentine from Cowboy Bebop",
		quote: "They often say that humans can’t live alone. But you can live pretty long by yourself. Instead of feeling alone in a group, it’s better to be alone in your solitude."
	}]
	// Variable to determine which Quote to show
	$scope.index = 0;
	// Set of quotes to show to the user. The starting one is just the instructions on how to use the App. 
	$scope.currentQuotes = [{
		author: "Nicolas Crumrine",
		quote: "Click on one of the five buttons above to select a category to pull quotes from. The order will be randomized and will loop over itself. The miscellaneous ('?') section is for sources that I didn't pull enough quotes from to warrant making a separate button."
	}];
	// Function stolen from the internet that will shuffle an array. Used for changing array of quotes.
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
	// Use the randomize functin to take the currentQuotes and randomize it. 
	$scope.randomize = function() {  
		$scope.currentQuotes = shuffle($scope.currentQuotes); 
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
		if(param == 'ElderScrolls'){
			$scope.currentQuotes = $scope.elderScrollsQuotes;
			$('#elderScrolls').addClass('active');
			$('#civilization').removeClass('active');
			$('#discworld').removeClass('active');
			$('#darkestDungeon').removeClass('active');
			$('#misc').removeClass('active');
		} else if(param == 'Civilization'){
			$scope.currentQuotes = $scope.civilizationQuotes;
			$('#elderScrolls').removeClass('active');
			$('#civilization').addClass('active');
			$('#discworld').removeClass('active');
			$('#darkestDungeon').removeClass('active');
			$('#misc').removeClass('active');
		}
		else if(param == 'Discworld'){
			$scope.currentQuotes = $scope.discworldQuotes;
			$('#elderScrolls').removeClass('active');
			$('#civilization').removeClass('active');
			$('#discworld').addClass('active');
			$('#darkestDungeon').removeClass('active');
			$('#misc').removeClass('active');
		}
		else if(param == 'DarkestDungeon'){
			$scope.currentQuotes = $scope.darkestDungeonQuotes;
			$('#elderScrolls').removeClass('active');
			$('#civilization').removeClass('active');
			$('#discworld').removeClass('active');
			$('#darkestDungeon').addClass('active');
			$('#misc').removeClass('active');
		}
		else if(param == 'Misc'){
			$scope.currentQuotes = $scope.miscQuotes;
			$('#elderScrolls').removeClass('active');
			$('#civilization').removeClass('active');
			$('#discworld').removeClass('active');
			$('#darkestDungeon').removeClass('active');
			$('#misc').addClass('active');
		}
		// Also randomize the order of the array of quotes.
		$scope.randomize();
	 }
	 // Tweet button: opens the current quote in twitter's tweet intent.
	 $scope.tweet = function(){
		window.open("https://twitter.com/intent/tweet?&text=" + $scope.currentQuotes[$scope.index].quote + " ~ " + $scope.currentQuotes[$scope.index].author );
	 }
});