// EVERY array method challenge

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// For more info see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// Data set we can work with ↓

const people = [
  { name: 'Buttface', year: 1988 },
  { name: 'Winston', year: 1986 },
  { name: 'Oldster', year: 1970 },
  { name: 'Koa Bear', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Chicken is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Check PEOPLE array to see if everyone is 19 
// *NOTE*: Almost identical syntax to SOME challenge, replacing SOME w/EVERY

// Step 1: Create var object
// Step 2: Go over array using EVERY method
// Step 3: Create PERSON function, using arrow function
// Step 4: We need to get the current date so we check for age
// Step 4a: We'll use the Date constructor and the .getFullYear method
// Step 5: We'll check to see if PERSON is greater or equal to 19
// Step 5a: Wrap everything in an extra set of parentheses() to use IMPLICIT return method

// *1 ↓             *2 ↓        *3 ↓       *4-4a ↓
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19); // *5-5a

const output = {allAdults};
// Expected output = FALSE 

console.table(output);

// For more info on Date constructor see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

// For more info on Implicit Return method see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions