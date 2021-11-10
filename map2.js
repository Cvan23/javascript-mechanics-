// The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.

const arr1 = [1,4,9];
const arr2 = arr1.map(function(num) {
  return Math.sqrt(num)
});
// The following code shows how map works when a function requiring one argument is used with it. The argument will automatically be assigned from each element of the array as map loops through the original array.

const arr3 = [2,4,6];
const arr4 = arr3.map(function(num) {
  return num * 2
})

// Reformatting Array Objects from DigitalOcean:
// https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know

const myCats = [
  {name: 'Koa', likes: 'treats'},
  {name: 'Rocket', likes: 'playtime'},
  {name: 'Loki', likes: 'being bad'}
];

const catsByLikes = myCats.map(function(item) {
  const container = {};
  container[item.name] = item.likes;

  return container;
});

console.log(catsByLikes);