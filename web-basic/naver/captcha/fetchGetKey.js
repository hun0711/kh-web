const myHeaders = new Headers();
myHeaders.append("X-Naver-Client-Id", "EfFYlYAqABV9U642TMS4");
myHeaders.append("X-Naver-Client-Secret", "OETqUuq95m");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://openapi.naver.com/v1/captcha/nkey?code=0", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    const imsi = JSON.stringify(result);
    console.log(imsi); //JSON.stringify()를 통해 오브젝트타입을 문자열로 변환함
    console.log(result.key); //값을 바로 꺼내옴
  })
  .catch((error) => console.log("error", error));
