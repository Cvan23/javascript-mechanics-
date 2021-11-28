// SORT challenge 3

// The JavaScript array sort() is used to sort array elements.
// By default, the array will sort in ascending order, but we can change it.
// This method will change the original array.
// We can also provide our comparing function to implement custom sorting.

// Data set we can work with ↓

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Sort the people alphabetically by last name

// Step 1: Create var object
// Step 2: Sort over PEOPLE array with .sort method
// Step 3: Pass arrow function into .sort param (lastOne,nextOne)
// Step 4: We need to destructure(square brackets[]) each string and put it in a var
// Step 4a: We need to use .split method, grabbing the common element of a comma and space in each object (', ')
// Step 5: Return conditional statement w/TERNARY OP to check if aLast is greater than bLast
// Step 5a: IF TRUE, return 1, ELSE, return -1

// *1 ↓         *2 ↓          *3 ↓
const alpha = people.sort((lastOne, nextOne) => {
//      *4 ↓              *4a ↓
  const [aLast] = lastOne.split(', ');
  const [bLast] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;  // *5-5a
});

const output = alpha;

console.table(alpha);