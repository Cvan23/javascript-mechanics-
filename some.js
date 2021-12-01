// SOME array method challenge

// The some() method tests whether at least one element in the array passes the test implemented by the provided function
// It returns true if, in the array, it finds an element for which the provided function returns true
// Otherwise it returns false. It doesn't modify the array
// For more info see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

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
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Check PEOPLE array to see if at least one person is 19

// Step 1: Create var object
// Step 2: Go over array using SOME method
// Step 3: Create PERSON function, using arrow function
// Step 4: We need to get the current date so we check for age
// Step 4a: We'll use the Date constructor and the .getFullYear method
// Step 5: We'll check to see if PERSON is greater or equal to 19
// Step 5a: Wrap everything in an extra set of parentheses() to use IMPLICIT return method

// *1 ↓             *2 ↓    *3 ↓          *4-4a ↓
const isAdult = people.some(person => ((new Date()).getFullYear())
- person.year >= 19); // *5-5a

const output = {isAdult};
// Expected output = TRUE 

console.table(output);

// For more info on Date constructor see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

// For more info on Implicit Return method see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions