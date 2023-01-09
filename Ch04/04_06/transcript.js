var cherub = "Cupid";
// cherub = 'Some Other Guy';

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");
else console.log("I feel nothing!");

var wantForChristmas = "puppy",
  gotForChristmas = "puppy",
  cryAboutIt = false;

if (wantForChristmas === gotForChristmas) {
  console.log("Yay! The little children are so pleased!");
  cryAboutIt = false;
} else {
  console.log("Oh no! Sad Christmas!");
  cryAboutIt = true;
}

if (cryAboutIt) {
  console.log("Child says: WAAAAAAAAAAAAAAAAAAAAAAAAA!");
}

if (!cryAboutIt) {
  console.log("Child says: YAY!!");
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Statements#if...else_Statement
//
// Truthy and falsy values are discussed here:
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
