/* Array */

const fruits = new Array("apple", "banana", "kiwi");

const fruits2 = ["cherry", "orange"];

console.log(fruits);
console.log(fruits2);

console.log(fruits[1]);
console.log(fruits2[1]);
console.log(fruits2.length);
console.log(fruits[fruits.length - 1]);
console.log(fruits2[fruits2.length - 1]);

const arr = [1, 2, 3, 4, 5];
const [i, j, ...rest] =
  arr; /* ...을 3개 붙이고 변수명을 통해 처리할 수 있다. */

console.log(i);
console.log(j);
console.log(rest);
