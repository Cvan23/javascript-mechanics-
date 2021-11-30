// REDUCE 2 challenge

// Notes on Reduce method:
// The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.
// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array
// Understanding REDUCE method is important when using REDUX for state management
// For more info see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// Data set we can work with ↓

const cats = ['cat', 'cat', 'cat-butt', 'cat-butt', 'my-cat-bite-you', 'cat-eat-snack', 'cat', 'cat-nap', 'my-cat-bite-you', 'cat-eat-snack', 'cat', 'cat-nap', 'cat', 'cat-butt', 'cat-nip'];

// Sum up the instances of each string above

// Step 1: Create var object
// Step 2: Go over CATS array using REDUCE method
// Step 3: Create function, passing in 2 arguments (obj,item) using arrow function
// Step 3a: OUTSIDE of arrow function, but inside of reduce param: create empty object using curly braces {}
// Step 4: Use bracket notation to access object's properties [item] and increment by 1 (++)
// Step 5: Above obj[item] but inside function create IF statement
// Step 5a: IF there is no obj[item]: set to 0 (this will set initial to zero)
// Step 6: Return obj

// *1 ↓         *2 ↓        *3 ↓
const catArr =cats.reduce((obj, item) => {
// *5 ↓
  if(!obj[item]) {
    obj[item] = 0;  // *5a
  }
  obj[item]++;  // *4
  return obj; // *6
//*3a↓
}, {});

const output = catArr;

console.table(output);