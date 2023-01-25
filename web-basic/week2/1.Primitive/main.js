// const는 재할당이 불가능하다.

const a = 0.1;
const b = 0.2;
// console.log(a + b); /* 부동소수점의 오류가 발생한다*/
// console.log((a + b).toFixed(1));

//undefiend - 기본적으로 갖는 값 - 값이 할당되지 않은 상태

let age = undefined;

console.log(age);

/* callback 함수 */
setTimeout(function () {
  age = 10;
  console.log(age);
}, 2000); // millisecond단위
