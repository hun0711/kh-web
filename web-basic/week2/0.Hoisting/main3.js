// const text; 재할당 불가, *선언과 초기화를 따로 작성이 불가하다
// 변수 : 특정 데이터값을 임시로 저장하는 공간
// -> 특정값을 자주 사용해야 할 때
// -> 반복적인 구문(값)이 여러 코드에 걸쳐서 빈번히 쓰일 때
// 변수 선언 방식
// ES5 - var -> 호이스팅이슈발생
// ES6 [let or const 사용할것,arrow function], ES7
// 변수 작성시 유의사항
// 숫자로는 시작이 불가함, 특수문자(...,$불가), 예약이 불가, 대소문자 구분
// 한글은 가능
const text = "default";
console.log(text);

console.log(text);
console.log(`text의 값은 ${text}입니다.`);

//const는 고정값이다.
//let은 변경될 수 있는 값이다.
const 변수명 = '테스트'
console.log(변수명);