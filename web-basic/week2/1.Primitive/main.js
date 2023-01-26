// const는 재할당이 불가능하다.

const a = 0.1;
const b = 0.2;
// console.log(a + b); /* 부동소수점의 오류가 발생한다*/
// console.log((a + b).toFixed(1));

//undefiend - 기본적으로 갖는 값 - 값이 할당되지 않은 상태

let age = undefined;

console.log(age);

/* callback 함수 */
setTimeout(function () {
  age = 10;
  console.log(age);
}, 2000); // millisecond단위

/*
 자료형(Data Type)
 자료형의 종류
 1.원시형 자료(primitive type) : 특정 값이 메모리에 저장(값만)
  - 문자형([Object String]) slice(8,-1)
  - 숫자형(Number)
  - 논리형(Boolean : true,false)
  - undefined : 변수를 선언하고 그 값을 초기화 하지 않으면 undefined저장됨(에러 원인되니까..)
 2.참조형 자료(reference type)
  : 값이 위치하고 있는 참조 주소값만 메모리에 저장(관련된 내장함수까지 값이 참조됨 : 기억)
  - null(Object) : 명시적으로 특정 변수의 값을 비워둘 때
  const myCar :
  const myCar = new Car()
  - array(Object) : 연관된 값들을 그룹으로 묶어 관리함 - []
  - 객체 - {} : Object 데이터를 key라는 인덱싱을 통해 자료를 구조적으로 묶어 놓은 형태
 */
