// Array.prototype.filter() Challenge

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

// Filter the list of inventors for those who were born in the 1500's

// Step 1: Create var object
// Step 2: Filter over INVENTORS object w/.filter method
// Step 2a: Pass in fucntion to loop over each INVENTOR in the array (we can use arrow function)
// Step 3: Inside function create IF statement
// Step 4: Inside IF statement param: If the inventor's year is >= 1500
// Step 4a: Next, still inside IF param: use LOGICAL AND OP (&&) to check if inventor's year is less than 1600
// Step 5: Return TRUE

  //*1 ↓            *2 ↓            *2a ↓
const fifteen = inventors.filter(inventor => {
  //*3 ↓     *4 ↓           *4a ↓
  if(inventor.year >= 1500 && inventor.year < 1600) {
    return true; //*5
  }
});

const output = fifteen;
// Expected output: 
// { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }
// { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }

console.table(output);