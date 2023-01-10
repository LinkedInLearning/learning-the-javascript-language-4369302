
// Before:
function speak() {
	console.log('Arf');
	console.log('Woof');
	console.log('Meow');
	console.log('Moooooooooooo');
}

// After:
const speak = () => {
	console.log('Arf');
	console.log('Woof');
	console.log('Meow');
	console.log('Moooooooooooo');
}

// Before:
function isEven(num) {
  return num % 2 === 0;
}

// After:
const isEven = (num) => {
	return num % 2 === 0;
}

// or:
const isEven = (num) => num % 2 === 0;

// And most succinctly:
const isEven = num => num % 2 === 0;



// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions