// 콜백(callback) 패턴
// 파라미터로 함수가 올 수 있다.
// 함수 객체다, 대입함수 가능함 [함수를 받는 변수 선언이 가능함]
const goodSearch = (callback) => {
  setTimeout(() => {
    console.log("상품조회");
    callback();
  }, 3000);
};
const cart = (callback) => {
  setTimeout(() => {
    console.log("카트담기");
    callback();
  }, 2000);
};
const account = (callback) => {
  setTimeout(() => {
    console.log("결제하기");
    callback();
  }, 4000);
};

const shipping = () => console.log("배송");

goodSearch(() => {
  cart(() => {
    account(() => {
      shipping();
    });
  });
});

/* 
 이처럼 순서대로 일처리 위해 콜백을 계속 반복해서 작성해야 하고
 바깥쪽에서 안쪽으로 계속적인 들여쓰기가 되면서 해석하기도 불편하고
 유지보수도 어려워진다 - 이것을 콜백지옥이라고 한다
*/
