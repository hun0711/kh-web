/* var는 이제 사용하지 않는다. */
const x = 10; /* 변수선언, const - 상수, let - 변수, 초기화, ECMAScript5,6,7(여기까지 대중적으로 사용..),8 */
const y = 20;

/* 출력 요청 - 변수 호출 - 백틱 - 표현식($) - 좌중괄호, 우중괄호 - 변수호출  */
console.log(`${x}`);
/* 브라우저 - 인터프리터 역할에서 실행해야 한다. 
Ryan Dahl - Node JS 발표 - node 설치 - npm이 같이 설치된다. 
nodejs에 추가적인 라이브러리 사용  - NodeJS를 설치하면 브라우저 없이도 테스트 할 수 있다.
node filename (확장자(extension) 제외)*/
console.log(`${y}`);
