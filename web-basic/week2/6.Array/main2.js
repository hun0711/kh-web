//배열 : Array
//연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조

const colors = ["red", "green", "blue"];
const c1 = colors[0];
const c2 = colors[1];
const c3 = colors[2];
const { color1, color2, color3 } = colors;
console.log(colors);
console.log(c1);
console.log("------------------------------------");
//arr.filter(callback(element[, index[, array]])[, thisArg])
colors.filter(function (a, index, array) {
  //실행문
  console.log(a);
  console.log(index);
  console.log(array);
});
