// Validate a palindrome using a decrementing FOR LOOP to reverse string

function isPalindrome(str) {
  let revString = "";
  for(let i = str.length -1; i >= 0; i--) {
    revString += str[i];
  }
  return revString === str;
  // Test cases for this code block -
  // 'hello' returned false as expected
  // 'tacocat' returned true as expected
}

const output = isPalindrome('tacocat')

console.log(output);

// *NOTE* A much more comprehensive method for Palindrome Validation can be found here: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/