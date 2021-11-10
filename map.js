// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as etiher a key or a value.
// *** From MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 'Koa');
map1.set('c', 3);
map1.set('d', [1,2,3,4,5]);

const output = (map1.get('d'));

console.log(output);