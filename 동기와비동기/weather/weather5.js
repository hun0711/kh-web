import { weatherKey } from "../../apiKEY.js";

const getWeather = (local, callback) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(
          "==================================================================================="
        );
        console.log(response);
        resolve();
      });
  });
};

// insert here
// Promise가 반환하는 함수에서만 await을 붙여야 한다.
// console.log에는 await을 붙이지 않는다.
// async와 await함께 사용된다

const runTest = async () => {
  await getWeather("seoul");
  console.log("서울 날씨 가져오기");
  await getWeather("pusan");
  console.log("부산 날씨 가져오기");
  await getWeather("cheongju");
  console.log("청주 날씨 가져오기");
};

runTest();

/* 
Promise는 다음 중 하나의 상태를 가집니다.

대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
이행(fulfilled): 연산이 성공적으로 완료됨.
거부(rejected): 연산이 실패함.

날씨 제공하는 서버에 다녀오는 (request와 response) 시간이 걸리므로
어느 지역이 먼저 처리될 지 알 수 없다. 
실행할 때마다 순서가 다를 수 있다.
호출 순서가 처리 순서를 의미하지않음!!!!!

문제 제기
만일 순서를 보장하고 싶다면 어떻게 해아할까???
서울 2초
부산 3초
인천 1초

콜백메소드 반복 작성
들여쓰기와 arrow function이 반복해서 나온다.
이러면 depth가 깊어짐 - 소스 분석이 어려워진다

자바스크립트는 기본적으로 순서대로 처리된다 - 동기 - 서로 맞춘다

순서가 맞지 않는 것 - 비동기
*/
