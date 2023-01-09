var bird = {
	genus : 'corvus',
	species : 'corvax',
	commonName: 'raven',
	callType : 'squawky',
	quote : 'Nevermore',
	maxOffspring : 5,
	noisy : true,
	deadly : false
};

bird.quote;

bird."quote"; // this does not work

bird["quote"];

bird.color = "black";

bird;

bird["where it lives"] = "in a tree";
bird.whereItLives = "in a tree";
bird.whereItLives;
bird['whereItLives'];

delete bird.color;
bird;

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object