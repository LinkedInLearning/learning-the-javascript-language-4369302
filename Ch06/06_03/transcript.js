function speakSomething(what, howMany) {
  // this pattern works nicely for default values:
  // check if the argument is undefined, and if it is, provide a default value
  var what = (typeof what !== "undefined") ? what : "Default speech";
  var howMany = (typeof howMany !== "undefined") ? howMany : 10;

  // shorter version that could get tripped up by truthiness
  // what = what || 'Default speech';
  // howMany = howMany || 10;

  for (var i = 0; i < howMany; i += 1) {
    console.log(what + " (" + i + ")");
  }
}

speakSomething("Hey hey", 5);
speakSomething("Hey hey");
speakSomething();

function addingMachine() {
  // initialize the total we'll be returning
  var total = 0;

  for (var i = 0; i < arguments.length; i += 1) {
    // grab the next number
    var number = arguments[i];

    // check if the argument is a number.
    // if so, add it to the running total
    if (typeof number === "number") {
      total += number;
    }
  }

  // done - return the total
  return total;
}

addingMachine(1, 2, 3);
addingMachine(1, 2, 3, 4, 5, 6, 7, 8, 9, 1204910249014);

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function
