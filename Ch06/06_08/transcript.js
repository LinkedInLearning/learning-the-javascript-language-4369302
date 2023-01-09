function doubleIt(number) {
  return (number *= 2);
}

var myNumbers = [1, 2, 3, 4, 5];

var myDoubles = myNumbers.map(doubleIt);

myNumbers.forEach(function(number) {
  console.log("My array contains", number);
});

doubleIt = number => (number *= 2);

// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
