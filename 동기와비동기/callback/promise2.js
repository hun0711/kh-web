// 콜백(callback) 패턴
// 파라미터로 함수가 올 수 있다.
// 함수 객체다, 대입함수 가능함 [함수를 받는 변수 선언이 가능함]
const goodSearch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("상품조회");
      resolve();
    }, 3000);
  });
};
const cart = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("카트담기");
      resolve();
    }, 2000);
  });
};

const account = () => console.log("결제하기");


goodSearch()
  .then(() => { return cart(); })
  .then(() => {
    return account();
  });
