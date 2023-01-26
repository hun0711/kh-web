func1();
func2();

function func1() {
  console.log("func1호출");
}
function func2() {
  console.log("func2호출");
}

const func3 = function () {
  console.log("func3호출");
};

func3(); //함수 표현식에서는 호이스팅 안 일어남

//함수 선언문에서도 호이스팅이 일어난다
//함수
//함수도 객체이다. - 함수도 파라미터로 넘길 수 있다
//메소드 오버라이딩, 오버로딩에 대한 지원이 없음
//같은 이름의 함수를 중복정의 불가함
