// &&
// ||

let animal1 = "monkey";
let animal2 = "bear";
let animal3 = "tiger";

// Pretend there's code that might change the values of the animal variables here, then…

animal1 === "monkey" && animal2 === "bear"; // true
animal1 === "ape" && animal2 === "bear"; // false
animal1 === "ape" && animal2 === "bear" && animal3 === "tiger"; // false
animal1 === "monkey" && animal2 === "bear" && animal3 === "tiger"; // true

animal1 === "monkey" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "ostrich"; // false

animal1 === "monkey" || animal2 === "monkey" && animal3 === "tiger";
(animal1 === "monkey" || animal2 === "monkey") && animal3 === "tiger";

!true; // false
!false; // true

animal1 === "monkey" && animal2 === "zebra"; // false
!(animal1 === "monkey" && animal2 === "zebra"); // true
animal1 !== "monkey" && animal2 !== "zebra"; // false
animal1 !== "monkey" || animal2 !== "zebra"; // true

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#Logical_operators
