// iterate over an array
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog",
];

for (let i = 0; i < pageNames.length; i += 1) {
  console.log(i, pageNames[i]);
}

for (var p in pageNames) {
  console.log(p, pageNames[p]);
}

for (var v of pageNames) {
  console.log(v);
}

// iterate over an object
var pages = {
  first: "Home",
  second: "About Us",
  third: "Contact Us",
  fourth: "JavaScript Playground",
  fifth: "Blog",
};
for (var p in pages) {
  if (pages.hasOwnProperty(p)) {
    console.log(p, pages[p]);
  }
}

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
