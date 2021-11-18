// SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// *NOTE*: Inside params of both FOR LOOPs we are setting var to 2 since 1 is not a prime number

// *Step 1: Create var (will act as counter) and set to 0
// *Step 2: Create incrementing FOR LOOP
// *Step 2a: set i to 2, as long as i is <= num, increment by 1
// *Step 3: Inside FOR LOOP create IF statement
// *Step 3a: IF statement is checking for prime nums (and value in loop)
// *Step 3b: IF num is prime: use add assign OP to add current value of iteration to TOTAL
// *Step 4: OUTSIDE of FOR LOOP, return TOTAL
// *Step 5: Create nested function outside of FOR LOOP, right under main function, to check if current iteration is prime
// *Step 5a: Pass in (i) as argument
// *Step 6: Create another incrementing FOR LOOP
// *Step 6a: Set var (j) to 2, as long as j < i, iterate by 1
// *Step 7: Inside FOR LOOP create IF statement to check if j is divisable by i, using modulo OP %
// *Step 7a: IF i is divis by j, return FALSE (meaning it's not prime number)
// *Step 8: OUTSIDE of current FOR LOOP, return TRUE

function sumAllPrimes(num) {
  let total = 0; //*Step 1
    //*Steps 5-5a ↓
  function checkForPrime(i) {
    for(let j = 2; j < i; j++) {  //*Step 6-6a
      if(i % j === 0) { //*Step 7
        return false; //*Step 7a
      }
    }
    return true;  //*Step 8
  }
    //*Steps 2-2a ↓
  for(let i = 2; i <= num; i++) {
    if(checkForPrime(i)) { //*Steps 3-3a
      total += i; //*Step 3b
    }
  }
  return total; //*Step 4
};

const output = sumAllPrimes(10);
// Expected output: 17

console.log(output);