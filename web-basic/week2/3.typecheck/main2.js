/* Nullish */

/* 삼항연산자 - 조건 ? 참 : 거짓 */

console.log(null ?? 1);
console.log(undefined ?? 2);
console.log(undefined ?? null);

console.log(null ?? 1 ?? 4);
console.log(false ?? 2 ?? 4);
console.log(0 ?? 1 ?? 3);

/* OR연산자인 경우 */

const n = 0;
const num = n || 7;
/* Nullish 병합 연산자를 이용하면 - 왼쪽부터 비교하는 것은 OR연산자와 동일
그러나 null, indefined는 건너 뛰고 나머지 데이터를 만나면 처음 만나자마자 반환 */
const num2 = n ?? 7;

console.log(num);
console.log(num2);
