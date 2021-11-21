// SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']


// Solution One: arguments, indexOf and filter method (passing in arr (array) to main function param)

// Step 1: Create var object (args)
// Step 1a: Turn object into array using .from method (passing in ARGUMENTS)
// Step 2: Create nested function, passing in arr (array)
// Step 3: Inside function return args (*NOTE: args contains everything in array*), using .indexOf(arr)
// Step 3a: Return TRUE if NOT in array, using triple equals OP to negative 1 (-1)
// Step 4: Pass nested function (filterArr) into the FILTER method, FILTER method will only return TRUE values
// Step 4a: Return method OUTSIED of nested function

function seekAndDest(arr) {
  const args = Array.from(arguments); // Steps 1-1a
      // Step 2 ↓
  function filterArr(arr) {
      // Steps 3-3a ↓
    return args.indexOf(arr) === -1;
  }
      // Steps 4-4a ↓
  return arr.filter(filterArr);
};

// Solution Two: rest OP, filter & includes method

// Step 1: Pass in array, as well as the rest of the params (using ...rest(rest OP)) into the argument of the main function
// Step 2: Return filtered array (whatever is TRUE will stay in array)
// Step 2a: Inside filter param pass in val function
// Step 2b: Use NOT OP (!) to return TRUE value if NOT in array
// Step 2c: Pass VAL into INCLUDES param

                // Step 1 ↓
function seekAndDestroy(arr, ...rest) {
//Steps 2↓          2a↓  2b↓            2c↓
  return arr.filter(val => !rest.includes(val));
};

const output = seekAndDestroy([2,3,4,6,6, 'hello'], 2,6);
// Expected output: [3,4,'hello']

console.log(output);