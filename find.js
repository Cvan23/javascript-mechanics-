// FIND challenge

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, UNDEFINED is returned.
// For more info see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// Data set we can work with ↓

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'My Cat Rules!', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Chicken is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Find is like filter, but instead returns just the one you are looking for
// Find the comment with the ID of 823423

// Step 1: Create var object
// Step 2: Go over array using FIND method
// Step 3: Create COMMENT function, using arrow function
// Step 4: Use the ID to check for specific value(823423), using TRIPLE EQUALS OP (===)

// *1 ↓               *2 ↓    *3 ↓              *4 ↓
const comment = comments.find(comment => comment.id === 823423);

const output = comment;
// Expected output: { text: 'My Cat Rules!', id: 823423 }

// findIndex method
// Same syntax as FIND, replacing FIND w/findIndex
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);

const output2 = index;
// Expected output: 1 (second position in array)

console.table(output2);