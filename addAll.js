// ADD ALL NUMBERS *NOTE* This is older ES5 method
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS

// *Step 1: Take ARGUMENTS object and convert to array using .prototype, .slice & .call methods
// *Step 2: Create var (will act as counter) and set to 0
// *Step 3: Create incrementing FOR LOOP 
// *Step 4: Inside FOR LOOP use add assign OP to add current value of iteration to TOTAL
// *Step 5: OUTSIDE of FOR LOOP: return TOTAL

function addAll() { //*Step 1 ↓
  const args = Array.prototype.slice.call(arguments);
  let total = 0;  //*Step 2
    //*Step 3 ↓
  for(i = 0; i < args.length; i++) {
    total += args[i]; //*Step 4
  }
  return total; //*Step 5
};

// More modern ES6 solution using ...rest OP, forEach and Arrow function

// *Step 1: insert rest OP (just 3 dots ...) in param of main function (will convert everything to array to utilize array methods)
// *NOTE*: inside function param 3 dots (...) designates rest OP, 'numbers' is name of the param
// *Step 2: Create var (will act as counter) and set to 0 
// *Step 3: Create FOREACH
// *Step 3a: Pass in num as callback function (Using Arrow func method)
// *Step 4: Inside FOREACH use add assign OP to add current value of num to TOTAL
// *Step 5: OUTSIDE of FOREACH: return TOTAL

              // *Step 1 ↓
function addAllNum(...numbers) {
  let total = 0;  // *Step 2
      // *Steps 3-3a ↓
  numbers.forEach((num) => {
    total += num; // *Step 4
  });
  return total; // *Step 5
};

const output = addAllNum(2,5,6,7,10,20);
// Expected output: 50

console.log(output);