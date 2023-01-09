var myNum = 32;
var myResult = "Success!";

function randomizer(limit) {
  var randomNumber = Math.floor(Math.random() * limit);

  var myNum = randomNumber;

  console.log("myNum is", myNum);
  console.log("Global myNum is", window.myNum);

  console.log("Our result is", myResult);

  return myNum;
}

randomizer(10);

function doubleIt(num) {
  var myNum = num * 2;

  return myNum;
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions#Function_scope
