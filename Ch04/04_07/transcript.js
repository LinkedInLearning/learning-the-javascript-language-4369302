var animal = "cat";
// animal = 'dog';

animal === "cat"
  ? console.log("You will be a cat herder.")
  : console.log("You will be a dog catcher.");

var job = animal === "cat" ? "cat herder" : "dog catcher";

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Statements#if...else_Statement
//
// Truthy and falsy values are discussed here:
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
//
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Conditional_Operator
