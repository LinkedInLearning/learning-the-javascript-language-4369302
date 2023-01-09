for (var i = 0; i < 10; i += 1) {
  console.log(i);
}

// very common use case: looping over an array.
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
];
for (i = 0; i < pageNames.length; i += 1) {
  if (document.title === pageNames[i]) {
    console.log("We ARE here: " + pageNames[i]);
  } else {
    console.log("We are not here: " + pageNames[i]);
  }
}

// don't repeat yourself:
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
];
for (i = 0; i < pageNames.length; i += 1) {
  var currentPageTitle = pageNames[i];

  if (document.title === currentPageTitle) {
    console.log("We ARE here: " + currentPageTitle);
  } else {
    console.log("We are not here: " + currentPageTitle);
  }
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Statements#for_Statement
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for
