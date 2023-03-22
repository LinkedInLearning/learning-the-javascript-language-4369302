// Creating a new Map instance
var theMap = new Map();

// This object is a bird
var bird = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
};

// Here is a map using the same structure
var birdMap = new Map();
birdMap.set("genus", "corvus");
birdMap.set("species", "corvax");
birdMap.set("commonName", "raven");

birdMap.get("genus"); // 'corvus'

birdMap.has("genus"); // true
birdMap.has("corvus"); // false (keys only)

// for...of loops work on Maps, with key and value returned
for (let value of birdMap) {
  console.log(`${value[0]} is ${value[1]}`);
}

// With destructuring, those parts can be unpacked into separate variables
for (let [key, value] of birdMap) {
  console.log(`${key} is ${value}`);
}

// Object.entries turns an object into the nested arrays that can make a Map
var birdMap2 = new Map(Object.entries(bird));

// This array has two copies of its first item
let myList = [1, 1, 2, 3, 5, 8, 13, "fibonacci"];

// The same thing using the Set API
let mySet = new Set();
mySet.add(1);
mySet.add(1); // this won't change mySet, since 1 is already in there
mySet.add(2);
mySet.add(3);
// ... this gets tedious

// An array can be turned into a set
// If you want to quickly remove all duplicates from an array, this is a good tool!
let mySet2 = new Set(myList);

mySet2.has(3); // true
mySet2.has(12); // false

// For...of loop iteration works
for (let item of mySet2) {
  console.log(`${item} is contained in mySet`);
}
