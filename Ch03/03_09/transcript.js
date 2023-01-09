var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';

var regex = /this/;

console.log( regex.test(string1) );
console.log( regex.test(string2) );
console.log( regex.test(string3) );
console.log( regex.test(string4) );

regex = /this/i;

regex = /^this/i;

regex = /this$/i;

regex = /ever.$/i;

regex = /ever\.$/i;

regex = /Moun.$/i;

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
