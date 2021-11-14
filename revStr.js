// Reverse a String With a Decrementing For Loop

// *Step 1 - Create empty string that will contain newly created string
// *Step 2 - Create FOR LOOP , the starting point of the loop will be (str.length -1) which corresponds to the last char of the string "s"
// As long as i is >= 0, the loop will continue, we decrement i after each iteration
// * Step 3 - Return the reversed string
// For more info see: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

function revString(str) {
  let newString = ""; // *Step 1

      // *Step 2 ↓
  for(let i = str.length - 1; i >= 0; i--) {
    newString +=str[i];
  }
  return newString; // *Step 3
}
revString('mycatrules'); // Expected output: selurtacym

// Using ES6 FOR OF method - more notes on this coming soon
// Benefits of this method: Less room for error inside params of FOR LOOP

function revStr(str) {
  let reversed = "";
  for(let char of str){
    reversed = char + reversed;
  }
  return reversed; // Expected output: olleh
}

const output = revStr('hello');

console.log(output);