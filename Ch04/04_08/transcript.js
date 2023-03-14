var thing = 12;
thing = "twelve";
typeof thing;

thing = 12;
typeof thing;

thing = false;
typeof thing;

thing = {};
typeof thing;

thing = [];
typeof thing;
typeof thing === "object" && thing.hasOwnProperty("length"); // true

thing = {};
typeof thing === "object" && thing.hasOwnProperty("length"); // false

NaN;
typeof NaN;
Number.isNaN();

typeof null;
thing === null;
thing = null;
thing === null;

let somethingLater;
typeof somethingLater;
typeof nothingSilly;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// https://lodash.com/docs/#isNumber
