// CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// *NOTE* In this case each word is an index value and each char is a substring

// *Steps 1 & 2: Turn string into array, turn all chars into lowercase
// *Step 3: Use .split method to split into array
// *Step 4: Create incrementing FOR LOOP
// *Step 5: Inside FOR LOOP take strArr index and set to .substring method (used to pluck out 1st char out of each string *pass in 0-1 in argument*)
// *Step 6: Chain .toUppercase method to .substring to caplitalize 1st char
// *Step 7: Concatinate the rest of the word to the 1st char (0 index), pass in index position 1 as the argument
// *Step 8: Return strArr using .join method to convert from arr to str, 
// *NOTE* make sure to put a space in empty str argument to designate each word and not each char is it's own index value

function capLetters(str) {  //*Steps 1 - 3 ↓
  const strArr = str.toLowerCase().split(' ');

          //*Step 4 ↓
  for(let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);    //*Steps 5-7 
  };
  
  return strArr.join(' ');    //*Step 8
};

// MAP SOLUTION to this problem (A more modern technique using a High Order Array function)

// *Steps 1 & 2: Return str using .toLowerCase
// *Step 3: Use .split method to split into array (don't forget to add a space inside empty string *see *NOTE* on line 12*)
// *Step 4: Use .map (which can manipulate array and return another array)
// *Step 5: Create function inside .map param
// *Step 5a: Pass in (word) as argument of function
// *Step 5b: Return 1st index value of WORD (0 idx)
// *Step 5c: Use .toUpperCase to capitalize first char of string
// *Step 5d: Concatinate SUBSTRING method onto WORD (passing in index value 2(which is 1))
// *Step 6: Add .join method to turn back into string (OUTSIDE of .map function)
// *NOTE* make sure to put a space in empty str argument to designate each word and not each char is it's own index value

function capLet(str) {
  return str  //*Step 1
    .toLowerCase()  //*Step 2
    .split(' ')  //*Step 3
    .map(function(word) { //*Steps 4-5d
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' '); //*Step 6

};

const output = capLet('i love koa bear');
// Expected output: 'I Love Koa Bear'

console.log(output);