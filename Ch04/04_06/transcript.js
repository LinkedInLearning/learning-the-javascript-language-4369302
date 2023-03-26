var cherub = "Cupid";
// cherub = 'Norman';

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");
else console.log("I feel nothing!");

let errorMsg = '';

if (error) {
  console.error('There was an error', error);
}

if (!error) {
  console.log('Yay! No errors!');
}

let errors = [];

// if (errors) { // Nope - empty arrays are truthy

if (errors.length) {
  console.error("Please fix these errors", errors);
}

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement
//
// Truthy and falsy values are discussed here:
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
