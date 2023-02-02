function Person() {
  this.eyes = 0;
  this.nose = 0;
}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;

Person.prototype.see = function (pic) {
  console.log(pic);
};

const kim = new Person();
const park = new Person();

console.log(kim.eyes);
kim.see("사진");
console.log(park.nose);

/* JavaScript는 흔히 **프로토타입 기반 언어(prototype-based language)**라 불립니다.
— 모든 객체들이 메소드와 속성들을 상속 받기 위한 템플릿으로써 **프로토타입 객체(prototype object)**를 가진다는 의미입니다. 
프로토타입 객체도 또 다시 상위 프로토타입 객체로부터 메소드와 속성을 상속 받을 수도 있고 그 상위 프로토타입 객체도 마찬가지입니다. 
이를 **프로토타입 체인(prototype chain)**이라 부르며 다른 객체에 정의된 메소드와 속성을 한 객체에서 사용할 수 있도록 하는 근간입니다. */
