// Promise prototype 활용

const goodSearch = () => {
  //resolve 성공시 콜백, reject함수는 실패시 콜백
  return new Promise((resolve, reject) => {
    //고차함수 - 함수 반환
    setTimeout(() => {
      console.log("상품조회");
      resolve();
    }, 2000);
  });
};

const cart = () => console.log("카트담기");

//goodSearch함수 호출될 때 콜백에서 cart함수를 호출하면
//순서가 보장된다.
goodSearch().then(() => {
 cart()
});
