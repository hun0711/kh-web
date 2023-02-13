export default 10; //default 사용하면 좌중괄호 우중괄호 사용불가

export const insa = "hello";
export const names = ["apple", "kiwi", "tomato"];
export const hap = (i, j) => {
  return i + j;
};

export class Sonata {
  constructor() {
    this.wheelNum = 4;
    this.speed = 10;
  }
  speedUp = () => {
    this.speed = this.speed + 1;
  };
}

/* 
 호이스팅 이슈 ("맨 위로 끌어올려져서 전역변수화 되는 현상")
 1) var i
 2) head 태그 안에 선언한 함수
 3) import문 - 모듈사용 (ES6, 브라우저지원-)

 함수 선언
 1)선언적함수 - 위치가 자유로움
 2)익명함수 - 콜백함수 -> 나중에 실행할 함수 -> 자바스크립트는 동기적 (*순서대로 실행된다)
 전제 조건 : 자바스크립트에서는 함수도 객체이다.
 3)대입형함수 - 일급함수 -> 고차함수 [리덕스(리액트 상태관리 구현한 것) 만드는데 결정적 역할] -> 리액트
 const func = () => {}
 4)즉시실행함수 ()() - ES6 이전에는 호이스팅 이슈 해결하는 방법으로 사용되었다.

*/
