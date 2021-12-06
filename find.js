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

const index = comments.findIndex(comment => comment.id === 823423);

const output2 = index;
// Expected output: 1 (second position in array)

// Delete the comment with the ID of 823423(calling .splice method)
// comments.splice(index, 1);

// Delete a comment (with the ID of 823423) and return a new array of updated comments using .slice method and SPREAD OP

// Step 1: Create new VAR array
// Step 2: Using SPREAD syntax(...), copy original array (passing in 0 and index)
// Step 3: Build a new array, passing in index plus 1

// *1 ↓
const newComments = [
  ...comments.slice(0, index),  // *2
  ...comments.slice(index + 1)  // *3
];

console.table(newComments);
// // Expected output:   ┌─────────┬───────────────────────────────┬─────────┐
// │ (index) │             text              │   id    │
// ├─────────┼───────────────────────────────┼─────────┤
// │    0    │         'Love this!'          │ 523423  │
// │    1    │      'You are the best'       │ 2039842 │
// │    2    │ 'Chicken is my fav food ever' │ 123523  │
// │    3    │       'Nice Nice Nice!'       │ 542328  │
// └─────────┴───────────────────────────────┴─────────┘

// For more info on .splice() method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// For more info on .slice() method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// For more info on SPREAD syntax(...): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax