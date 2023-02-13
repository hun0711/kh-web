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

const account = () => console.log("결제하기");

goodSearch(() => {
  cart(() => {
    account();
  });
});
