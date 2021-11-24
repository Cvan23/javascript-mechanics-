// SORT challenge 

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

// Sort the inventors by birthdate, oldest to youngest

// Step 1: Create var object
// Step 2: Sort over INVENTORS array with .sort method
// Step 3: Pass function into .sort param
// Step 3a: Pass in fistPerson & secondPerson (a,b) into function param
// Step 4: Create IF statement inside function
// Step 4a: Let's say: IF firstPerson > secondPerson: return 1
// Step 4b: ELSE: return -1
// Optional Step 5: Shorten the code using arrow function and TERNARY OP (shorthand conditional statemen)

// *1 ↓             *2 ↓    *3 ↓  *3a ↓
const order = inventors.sort(function(a,b) {
//*4 ↓    *4a ↓
  if(a.year > b.year) {
    return 1; // *4a
  } else { // *4b
    return -1
  }
});
                                  // *5 ↓
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

const output = ordered;

console.table(ordered);