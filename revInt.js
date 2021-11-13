// Reverse Integer *NOTE* Return value needs to be an integer and NOT a string

// *Step 1: convert to string using .toString method
// *Step 2: Split string using .split method
// *Step 3 & 4: chain .reverse & .join methods
// *Step 5 & 6: return reversed string wrapped in built in parseInt function
// *Step 7: OPTIONAL - use Math.sign method to reverse negative integers 

function reverseInt(int) { //*Steps 1-4 ↓
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString) * Math.sign(int);
        //*Steps 5-6 ^       //*Step 7 ^
}

const output = reverseInt(-12345);

console.log(output);