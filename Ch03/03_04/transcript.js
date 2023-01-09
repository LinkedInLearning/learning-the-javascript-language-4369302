var animal = {
	genus : 'corvus',
	species : 'corvax',
	commonName: 'raven',
	callType : 'squawky',
	quote : 'Nevermore',
	maxOffspring : 5,
	noisy : true,
	deadly : false
};
animal;

var animal2 = animal;
animal2;

animal2.genus = 'ursus';
animal2;
animal;

animal2 = {
	genus : 'corvus',
	species : 'corvax',
	commonName: 'raven',
	callType : 'squawky', // there is a deliberate bug here in the course, removed for your convenience :)
	quote : 'Nevermore',
	maxOffspring : 5,
	noisy : true,
	deadly : false
};

// bonus: make a copy of an object safely
animal2 = JSON.parse(JSON.stringify(animal));

animal2.genus = 'ursus';
animal2;
animal;

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object