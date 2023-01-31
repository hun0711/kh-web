var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then((response) => response.json()) //응답이 오면 찍어줄래? json으로
  .then((result) => console.log(result)) //그 정보를 콘솔에 띄워줄래??
  .then((result) => {
    //ul태그를 js를 활용해서 생성하기
    const ul = document.createElement("ul"); //DOM API - 구조가 잘 안보임 /* ul태그는 for문 바깥에 위치 */
    for (let i = 0; i < 10; i++) {
      //반복문 - 20번
      const li = document.createElement("li"); //li태그를 5개 생성
      //<li>뉴스제목1</li>
      //<li>뉴스제목2</li>
      //<li>뉴스제목3</li>
      //<li>뉴스제목4</li>
      console.log(result[i].title);
      li.innerHTML = result[i].title; //해커뉴스에서 반환값으로 제공되는 json에서 title
      //for문에서 만들어진 li태그를 ul태그에 넣기
      ul.appendChild(li);
      //console.log(result[i].title);
    }
    //news.html문서의 body에 정의된 <div id-root><ul></ul><div>
    document.getElementById("root").appendChild(ul);
  })
  //에러가 발생하면 그 때 출력
  .catch((error) => console.log("error", error)); /* 에러발생하면 캐치 */
