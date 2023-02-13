import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
class AuthLogic {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };

  getGoogleAuthProvide = () => {
    return this.googleProvider;
  };
}
export default AuthLogic;

//크롬에서 서비스 사용시 로그인 정보가 수정될 때 콜백되는 코드
//상태가 바뀔 때 마다 자동으로 호출됨
//절대 개발자가 호출하는 함수가 아님
export const onAuthChange = (auth) => {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
};

export const loginGoogle = (auth, googleProvider) => {
  //로그인 함수
  //console.log("providerName : " + providerName);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider).then((result) => {
      //result에는 구글 서버에서 전달해준 사용자 이름
      const user = result.user;
      console.log(user); //json형식
      resolve(user);
    }).catch(e => reject(e))
  })
}

  const authProvider = this.getProvider(providerName); //구글인가 깃헙인가 문자열 정보 가져옴
  //console.log("authProvider : " + authProvider);
  //console.log("this.firebaseAuth : " + this.firebaseAuth);
  //return signInWithPopup(this.firebaseAuth, authProvider);
  return signInWithPopup(this.firebaseAuth, authProvider);
;

export const logout = (auth) => {
  return new Promise((resolve, reject) => {
    auth.signOut().catch((e) => reject(alert(e + " : 로그아웃 에러입니다.")));
    resolve();
  });
};
