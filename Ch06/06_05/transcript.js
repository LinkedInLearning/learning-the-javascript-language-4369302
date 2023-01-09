function speakSomething(what) {
  what = what || "Speaking!";

  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
}

var speakSomething = function(what) {
  what = what || "Speaking!";

  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
};

window.setTimeout(speakSomething, 5000);

var obj = {
  sayHello: function() {
    console.log("Hello");
  }
};

obj.sayHello();

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function
