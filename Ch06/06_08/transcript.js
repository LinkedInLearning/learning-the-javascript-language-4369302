// Before:
const speak = function () {
  console.log("Arf");
  console.log("Woof");
  console.log("Meow");
  console.log("Moooooooooooo");
};

// After:
const speak = () => {
  console.log("Arf");
  console.log("Woof");
  console.log("Meow");
  console.log("Moooooooooooo");
};

// Before:
function isEven(num) {
  return num % 2 === 0;
}

// After:
let isEven = (num) => {
  return num % 2 === 0;
};

// or:
isEven = (num) => num % 2 === 0;

// And most succinctly:
// prettier-ignore
isEven = num => num % 2 === 0;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
