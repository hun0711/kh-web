// null 어떠한 값이 존재하지 않는다.

let age = null;

console.log(age);

setTimeout(function () {
  age = 32;
  console.log(age);
}, 1000);
