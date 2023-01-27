// 필터

//arr.filter(callback(element[, index[, array]])[, thisArg])

function Counter() {
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function (array) {
  //array->[2,5,9]
  array.forEach(function (item) {
    this.sum += item;
  }, this);
};

//prototype을 이용하면 나도 자바스크립트처럼
//사용자 정의 객체를 선언한 뒤 사용자 정의 함수를 정의할 수 있다.
//react.js -> redux사상 - 사용자 정의 구현해보기(수준), vue.js
// +typescript - 바닐라스크립트기반에 위에 얹혀진 언어 - 객체지향 - 캡슐화,상속,다형성
//자바스크립트에서도 사용자 정의 객체를 만들 수 있다. -> function
//사용자 정의 함수를 정의할 때는 prototype 사용
//prototype을 사용하여 함수를 정의한다는 건 사용자 정의 API를 만드는 것이다.
Array.prototype.filter = function (func, thisArg) {
  "use strict";
  if (!((typeof func === "Function" || typeof func === "function") && this))
    throw new TypeError();
};

const obj = new Counter();
obj.add([3, 5, 15]);
console.log(obj.sum);

//자바스크립트에서는 함수를 만들때도 function
//객체를 선언할 때도 function
//객체가 정의하는 함수를 만들때는 prototype
//바닐라스크립트(순수한)에서는 전변 선언 없이도 생성자에서 초기화 가능함
//나도 API(객체와 함수 그리고 변수[const, let])를 만들 수 있는 개발자가 되자
function Sonata() {
  this.wheelNum;
  this.speed;
  this.carName;
}

Sonata.prototype.stop = function (wheelNum) {
  console.log("stop 호출" + wheelNum);
};

const myCar = new Sonata();
myCar.stop(4);
