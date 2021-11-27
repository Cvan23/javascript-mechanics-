// REDUCE challenge
// Notes on Reduce method:
// The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.
// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array
// Understanding REDUCE method is important when using REDUX for state management
// For more info see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// Data set we can work with ↓

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// How many years did all the inventors live all together?

// Step 1: Create var object
// Step 2: Go over array using REDUCE method
// Step 3: Create function, passing in 2 arguments (total,inventor) using arrow function
// Step 4: Return total(needs to be set to zero, see Step 5) plus PASSED minus YEAR for each inventor in array
// Step 5: OUTSIDE of arrow function, set to zero, *NOTE* this must be done to loop through array correctly.
// *NOTE*: If zero isn't set, the first time REDUCE method loops through array it will read undefined since there is no total the first time around

// *1 ↓                   *2 ↓                *3 ↓
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year); // *4
}, 0) // *5

const output = totalYears;
// Expected output: 861

console.table(totalYears);