// MAX CHARACTER
// Return the character that is most common in a string as well as a map of the KEY/VALUE pairs

// *Steps 1 & 2: Create variable as a map and set to empty object literal (empty curly braces)
// *Step 3: Loop through string as an array
// *Step 3a: Split str into array using .split method (pass in empty string as argument)
// *Step 4: Use FOR EACH method
// *Step 4a: Pass in function as FOR EACH param
// *Step 4b: Pass in CHAR into function param
// *Step 5:  Use IF statement (we need to look for key/value pairs)
// *IE*: Each char represents a key, the number of occurrences is the value **'java' : 'j' would have a value of 1, 'a' would have value of 2**
// *Step 5a: Pass in charMap (grabbing 'char') as argument for IF statement (checks to see if char exists)
// *Step 5b: Inside IF block: Add one to existing 'char' using ++ (incrementing operator)
// *Step 5c: Inside of ELSE block: set charMap to 1
// *NOTE*: Using the word 'java' as example - line  will set 'j' to 1, 'a' to 1, 'v' to 1 and line  would set second 'a' to 2
// *Step 6: Use FOR IN loop (used to loop through objects instead of arrays) to return highest value char
// *Step 6a: Use let keyword to set variable of char
// *Step 7-8: Set 2 new vars outside of all inner functions (must use LET keyword since values will be redefined)
// *NOTE*: Set maxNum to 0 and maxChar to empty string
// *Step 9: Create IF statement inside of FOR IN loop
// *Step 9a: Check to see IF charMap[char] is > maxNum in argument
// *Step 9b: Set maxNum to charMap value
// *Step 9c: Set maxChar to char value
// *Step 10: OUTSIDE of FOR LOOP: return maxChar

function maxChar(str) {
  const charMap = {}; //*Steps 1-2
  let maxNum = 0; //*Step 7
  let maxChar = ''; //*Step 8

  //*Steps 3-4b ↓
  str.split('').forEach(function(char) {
    if(charMap[char]) { //*Steps 5-5a
      charMap[char]++;  //*Step 5b
    } else {
      charMap[char] = 1;  //*Step 5c
    }
  });
  console.table(charMap)  // Use this to view charMap in console

  //*Steps 6-6a ↓
  for(let char in charMap) {
    if(charMap[char] > maxNum) {  //*Steps 9-9a
      maxNum = charMap[char]; //*Step 9b
      maxChar = char; //*Step 9c
    }
  }

  return maxChar; //*Step 10
};

const output = maxChar('javascriptttttt');
// Expected output: t 

console.log(output);