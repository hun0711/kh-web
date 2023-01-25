// 객체형 타입
/* JavaScript에서는 { }로 묶이는 것을 객체라 한다. */
const student = {
  name: `이순신`,
  age: 45,
  tel: null,
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student[`name`]);
console.log(student[`age`]);
console.log(student.tel);
console.log(student.email); /* 없는 속성을 출력하려고 하면 undefinded 출력 */
