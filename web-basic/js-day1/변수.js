console.log("3");

/* 
변수
:특정 데이터값을 임시로 저장하는 공간

이유
:반복 사용(일괄처리), 자주사용
:반복적인 구문에서 여러 코드에 걸쳐서 사용될 때

변수 선언 방식
ES5-[호이스팅 이슈]-기술면접 주요질문

let, const(ES6 - ECMAScript2016)
let : 변경될 수 있는 값을 저장할 때
const : 변경되지 않는 값을 저장

변수 작성시 주의사항
1. 숫자로 시작 불가
2. 특수문자 삽입 불가(언더스코어,$)
3. 예약어 사용불가
4. 대소문자 구분

변수의 유효범위
1.전역변수 - window
:코드 블록 밖에서 선언된 변수
:해당 코드 전역에서 접근 가능
:여러개의 서로 다른 함수들이 같은 값을 공유해야 될 때 (중요)
:전역변수 많아지면 전역변수 오염 발생

2.지역변수 - 코드블록 안에서만 사용
:코드 블록 안에서 선언된 변수
:해당코드 블록 안에서만 접근 가능
:변수 값이 해당 코드 블록 안에서만 사용 가능

3.호이스팅
*/

const 한글 = "10";
console.log(한글);
