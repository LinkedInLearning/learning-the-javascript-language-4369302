var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

var regex = /this/;

regex.test(string1);
regex.test(string2);
regex.test(string3);
regex.test(string4);

regex = /this/i;
//"/i" by adding this, it will ignore letter case

regex = /^this/i;
// this will comes true for all this come at the begining of the line

regex = /this$/i;


regex = /ever.$/i;

regex = /ever\.$/i;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
