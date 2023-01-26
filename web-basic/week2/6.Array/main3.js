//배열 : Array
//연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조

const colors = ["red", "green", "blue"];
console.log(colors);

//arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
//arrow function에서 [ES6]는 파라미터가 한개이면 괄호 생략가능함
//arrow function에서는 실행문이 단일행이면 좌중괄호 우중괄호 생략 가능함
colors.forEach((color) => console.log(color));
colors.forEach((color, index, colors) => {
  //함수의 이름이 없다 - 사용자 호출이 불가함
  //console.log(color);
});
colors.forEach(function (color, index, colors) {
  //함수의 이름이 없다
  //console.log(color);
});
