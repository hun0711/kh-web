const deptList = [
  { deptno: 10, dname: "개발1팀", loc: "청주" },
  { deptno: 20, dname: "개발2팀", loc: "서울" },
  { deptno: 30, dname: "운영팀", loc: "대전" },
];

console.log(deptList);

deptList.push({ deptno: 40, dname: "총무팀", loc: "인천" });

let other = [];
//배열 중에서 파라미터로 들어온 조건을 만족하는 원소만 새로운 배열에 담는다 - filter
other = deptList.filter((row) => row.deptno > 20);

console.log(deptList);
console.log(other);

deptList.splice(2, 1, { deptno: 30, dname: "총무1팀", loc: "제주" });
console.log(deptList);
