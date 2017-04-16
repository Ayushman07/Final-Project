var namesList = [
	"Antonio Conte",
	"Eden Hazard",
	"John Terry",
	"John Obi Mikel",
	"Marcos Alonso",
	"Victor Moses",
	"Willian",
	"Diego Costa",
	"Thibaut Courtoise",
	"Pedro",
];

var infoList = [
	"inertly likes Tottenham more than Chelsea",
	"hates Arsenal like most other Blues fans",
	"takes a better freekick than Ronaldo and David Beckham",
	"wants a transfer to a lower league team to get more playtime",
	"takes fouls like a man but is actually the soft on the team",
	"scores goals but fights more on the pitch",
	"watches Arsenal Fan TV more than Chelsea Fan Tv",
	"has more goals than Pogba this season",
	"is a doner, he donates his money to the rich by taking from the rich",
	"drives a costly beamer but plays crap music in it",
];

var qualStatList = [
	"It's true!",
	"You can ask him, go ahead!",
	"Will Chelsea fans forgive him for this?",
	"If that is the case then I am not a Chelsea fan anymore!",
	"What does Arsenal Fan TV think about this?",
	"Was he worth the money?",
	"Roman Abramovich might have something to say about this!",
	"Will anyone doubt this?",
	"This a load of bullshit!",
	"It is all about the money!",
];

var conculsionList = [
	"Sad!",
	"Sigh!",
	"This is not right!",
	"Keep the blue flag flying high!",
	"There is no loyalty!",
	"Football is all about girls and money!",
	"Who is Paul Pogba again?",
	"Not what you had in mind right?",
	"Stupid!",
	"This can't be true!",
];


function pickRandomItem(myArray) {
	var myItem = myArray[Math.floor(Math.random()*myArray.length)];
	return myItem;
}

function generateTweet() {
	name = pickRandomItem(namesList);
	info = pickRandomItem(infoList);
	qualStat = pickRandomItem(qualStatList);
	conclusion = pickRandomItem(conculsionList);

	$("div.tweet-content").html(name + " " + info + "." + qualStat + " " + conclusion);
	$ (".tweet").hide();
	$ (".tweet").show(1000);
}

$ ("button").click(generateTweet); 

$ (".tweet").hide();


