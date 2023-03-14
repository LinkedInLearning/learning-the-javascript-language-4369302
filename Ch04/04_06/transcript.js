var cherub = "Cupid";
// cherub = 'Norman';

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");
else console.log("I feel nothing!");

var wantForBirthday = "soccer ball",
  gotForBirthday = "soccer ball",
  isDisappointed = false;

if (wantForBirthday === gotForBirthday) {
  console.log("Yay! The child is so pleased!");
  isDisappointed = false;
} else {
  console.log("Oh no! There are many sad expressions!");
  isDisappointed = true;
}

if (isDisappointed) {
  console.log("The child says: O woe is me! Catastrophe has struck this day!");
}

if (!isDisappointed) {
  console.log("Child says: YAY!! I will treasure this day!");
}

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement
//
// Truthy and falsy values are discussed here:
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
