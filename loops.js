// Counting up from 10
function loop1() {
  for (let i = 1; i <= 10; i++)
  console.log(i)
}
// Counting down from 10
function loop2() {
  for (let i = 10; i > 0; i -= 1)
  console.log(i)
}
// Counting up (odd nums only)
function loop3() {
  for (let i =1; i <= 10; i += 2)
  console.log(i)
}
// Counting down from 10 (even nums only)
function loop4() {
  for (let i = 10; i > 0; i -= 2)
  console.log(i)
}

const output = loop4();

console.log(output);