console.log(x);
var x = 2;
/* 
호이스팅(Hoisting)
:블록안에서 선언된 지역변수가 코드블록 밖으로 끌어올려지면서
 강제로 전역변수화 되는 현상
선언을 나중에 했는데 끌어올려져셔 오류가 나지 않는다!
 */

console.log(text);
var text = "hello";
//text = "hello";

const btns = document.querySelectorAll("ul li");
//즉시실행함수
/* 괄호가 2개 들어감
   첫번째 - 함수의 선언부
   두번째 - 함수 호출하는 괄호
   익명함수 형태인데 호출이 되는 이유는
   두번째 괄호가 있기 때문에 가능함
 */
for (var j = 0; j < btns.length; j++) {
  ((index) => {
    btns[j].addEventListener("click", () => {
      console.log(index);
    });
  })(j);
} //end of for
