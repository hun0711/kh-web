/* 리터럴을 이용한 배열 선언 및 초기화 */
let colors = ["red", "green", "blue"];
//콜백함수 - 함수 호출할 때 인수(파라미터)로 함수가 들어가는 형태
//arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// ES5 - 반복처리기능만, 유사배열도 처리해줌, ES6 - 순수배열만
// 이전
colors.forEach(function (color, index, items) {
  //3번 반복
  console.log(color); //red green blue
  console.log(index); // 0    1    2
  console.log(items); //["red", "green", "blue"]["red", "green", "blue"]["red", "green", "blue"]
});
// 이후버전 - React수업 - 데이터변하면 변하는 것만 렌더링 처리함
colors.forEach((color, index) => {
  console.log(color); //red green blue
  console.log(index); // 0    1    2
});
colors.forEach((color) => {
  console.log(color); //red green blue
});
console.log(
  "-------------------------------------------------------------------------------------"
);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
colors.map(function (color, index, items) {
  //3번 반복
  console.log(color); //red green blue
  console.log(index); // 0    1    2
  console.log(items); //["red", "green", "blue"]["red", "green", "blue"]["red", "green", "blue"]
});
