const object = {
  a: 1,
  b: 2,
  c: 3,
  e: null,
};

/* 구조분해시 같은 변수를 사용하는것이 불가능하다. */
const { a, b } = object;
const { c } = object;
const { d } = object;
const { e = 100 } = object; /* 구조분해할당시 초기화도 가능하다. */
console.log(a);
console.log(b);
console.log(c);
console.log(d); /* undefined */
console.log(e);

const { f = 10 } = object; /* object에 f가 없으니 14번 초기화된 값이 출력 */
console.log(f);

const arr = [1,2,3,4,5]
const [i,j,...rest] = arr
console
