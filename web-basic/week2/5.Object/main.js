/* Object */

function Student() {
  this.name = "진도준";
  this.age = 30;
}

const studentA = new Object();
studentA.name = "이순신";
studentA.age = 55;
studentA.tel = null;

const studentB = {
  name: "강감찬",
  age: 42,
  tel: 010 - 2842 - 1001,
  parent: studentA,
};

// console.log(studentA);
// console.log(studentB);

/* [] 이면 Array, {} 이면 Object */
const students = [studentA, studentB];

console.log(students[0]);
console.log(students[1]);
console.log(students[1]['parent']['name']);
