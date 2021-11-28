// SORT challenge 2

// The JavaScript array sort() is used to sort array elements.
// By default, the array will sort in ascending order, but we can change it.
// This method will change the original array.
// We can also provide our comparing function to implement custom sorting.

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

// Sort the inventors by years lived

// Step 1: Create var object
// Step 2: Sort over INVENTORS array with .sort method
// Step 3: Pass arrow function into .sort param (a(lastGuy),b(nextGuy))
// Step 4: Inside arrow function, declare lastGuy(a) var, set to (passed minus (-) year)
// Step 5: Inside arrow function, declare nextGuy(b) var, set to (passed minus (-) year)
// Step 6: Return conditional statement w/TERNARY OP to check if lastGuy is greater than nextGuy
// Step 6a: If true: return negative one (-1)
// Step 6b: Else: return one (1) 

// *1 ↓              *2 ↓     *3 ↓
const oldest = inventors.sort((a,b) => {
  const lastGuy = a.passed - a.year;  // *4
  const nextGuy = b.passed - b.year;  // *5
            // *6 ↓     *6a ↓ *6b ↓
  return lastGuy > nextGuy ? -1 : 1;
});

const output = oldest;

console.table(output);