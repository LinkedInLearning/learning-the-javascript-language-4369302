fuddify("Be very quiet, I'm hunting rabbits.");
fuddify("You screwy rabbit.");
fuddify("Rabbit tracks!");

function fuddify(speech) {
  // if it's not a string, return an error message
  if (typeof speech !== "string") {
    console.error("Nice twy, wabbit!");
    return;
  }

  // otherwise, make it sound like Elmer Fudd
  speech = speech.replace(/r/g, "w");
  speech = speech.replace(/R/g, "W");

  return speech;
}

var utterance = fuddify("You screwy rabbit");
utterance;

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(num) {
  return num % 2 === 0;
}

12 % 2;
isEven(44);

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function
