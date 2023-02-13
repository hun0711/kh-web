import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
class AuthLogic { //객체 선언 - 자바스크립트에는 중복선언 불가함
  constructor() { //익명 생성자 
    this.firebaseAuth = getAuth();//구글에서 객체 주입해줌
    this.googleProvider = new GoogleAuthProvider();//구글 지원객체
    this.githubProvider = new GithubAuthProvider();//구글 github 지원 객체
  }

  //로그아웃 버튼이 눌리면 호출
  //그런데 굳이 export로 선언하는 이유가 무엇입니까?
  //리액트에서는 한 페이지를 모듈화 시켜서 재사용성을 높이는 방식이므로 
  //어떤 컴포넌트에서든지 호출이 가능하도록 설계하는 것이 좋다. - 함수
  logout() {
    this.firebaseAuth.signOut();
  }

  //호출되면 파라미터값에 따라서 변경사항이 있을 때 마다 자동 호출됨
  onAuthChange(onUserChanged) {
    //구글에서 제공하는 함수 - onAuthStateChanged
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
  
  //아래 파라미터로 Google or Github
  getProvider(providerName) {// Google , 소문자면 에러 why? -> 34번라인
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthLogic; //이래야지 외부에서 사용가능하다

/* 
 package.json에는 의존관계 라이브러리 등록
 (개발자 의존 -D -실제 운영서버에는 미배포, 배포용)
 외부 스크립트 사용 방법

   1.commonjs - 디폴트(생략되어 있음-package.json -> npm init -y)
   const http = requires('http')

   2.module
   import {,,,} from './XXX.js'

   리액트 수업 공통 사항

   authLogic.js - 리액트 수업 활용

   export - 여러개 가능 {}

   export default 하나만 가능

  호이스팅 대상
   1.var i
   2.함수 선언
   3.import문
  
   가장 먼저 실행된다 - 가장 먼저 읽는다. - 먼저 스캔 된다.
   이걸 미루는 예약어 -> defer -> 다운로드가 끝나고 브라우저가 DOM Tree 그린다. 이때까지 기다려줘
   -> DOM Tree가 완성되면 DOM API를 사용할 수 있다. -> document.querySelector() document.querySelectorAll => []
   -> 브라우저는 같은 이름이 두 개 이상이면 자동으로 배열 전환이 된다
   checkbox name = hobby
   배열 - 데이터셋과 직결 - json
   
   누가 제공하니? - 서버 제공
   유튜브 API
   OpenWeather
   HackerNews
   내려받으려면 시간이 걸린다 - 비동기처리 발생 - 지연발생
   따로따로 처리하다가 먼저 처리가 되면 -> then(()=>{})


fetch("https://api.openweathermap.org/data/2.5/weather?appid=fde4562329f9ff564a32662ca0fc28f5&q=seoul&units=metric", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


   const temp = JSON.stringify(response.json()) -> 객체 -> 문자열
   const jsonDoc = JSON.parse(temp) 문자열 -> 배열
   jsonDoc[].XXXX  


   mime type
   text/javascript require, import error

   text/module import

   text/common -> require
   서로 호환되지 않는다

   반복해서 수련한다!
   
   */
