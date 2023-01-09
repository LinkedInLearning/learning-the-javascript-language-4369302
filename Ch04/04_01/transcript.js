var one = 1,
  two = 2;

one === one; // true
one !== one; // false
one !== two; // true
one === two; // false

one == one; // true
one == "1"; // true (?!)
one != "1"; // false (?!)
one === "1"; // false

one < two; // true

one > two; // false

one <= two; // true

one <= one; // true

one >= two; // false

10 >= two; // true

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
