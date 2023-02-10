const keyword = document.querySelector("#keyword");
//input textfield에 입력한 후 엔터 쳤을 때를 잡아내는 함수
keyword.addEventListener("keypress", (event) => {
  console.log("onkeypress가 엔터인지 아닌지" + event.keyCode);
  //사용자가 입력한 검색어를 찾는 함수 호출
  if (event.keyCode === 13) {
    handleSearch();
  }
});

//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value;
  console.log("사용자가 입력한 검색어 ===>" + user);
  search(user);
};

//리액트에서는 video로 받아와서 구조분해 가능 / 바닐라에서는 불가능하다.
let videoItem;
const videoShow = (id, title, description, channelTitle) => {
  videoItem = `
  <section class="detail">
  <iframe id="player" type="text/html" width="640" height="500px"
  src="http://www.youtube.com/embed/${id}"
  frameborder="0"></iframe>
  <h2>${title}</h2>
  <h3>${channelTitle}</h3>
  <pre class="description">
  ${description}
  </pre>
  <div>
  <a href="./youtube.html">이전페이지</a>
  &nbsp;
  <a href="javascript:search('손흥민')">이전페이지2</a>
  </div>
  </section>
  `;
  document.querySelector("#root").innerHTML = videoItem;
};

//사용자가 입력한 검색어로 조건 검색 구현하기
const search = (user) => {
  console.log("사용자가 입력한 bts 받음 :" + user);
  const ajax = new XMLHttpRequest();

  const videoList2 = [];
  const key = "AIzaSyAf2833_HqoWOxEqydCY7aeWwQS6Bgo2Zc";
  //const searchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=손흥민&key=AIzaSyAf2833_HqoWOxEqydCY7aeWwQS6Bgo2Zc`;
  const searchURL =
    "http://192.168.10.47:5500/google/youtube/step4/sample.json";

  ajax.open("GET", searchURL, false);
  ajax.send();
  const rst = JSON.parse(ajax.response);
  console.log(rst);
  const items = rst.items;
  items.forEach((item) => {
    console.log(item.id.videoId);
  });
  console.log(items);
  console.log(items.length);
  let items2;
  items2 = rst.items.map((item) => ({ ...item, id: item.id.videoId }));
  console.log(items2); //

  videoList2.push(`<ul class="videos">`);
  items2.map((video) => {
    //자바스크립트에서는 파라미터로 값을 넘길 때 반드시 싱글쿼테이션 또는 더블쿼테이션을 붙여야 값으로 인정됨
    //만일 붙이지 않으면 XXX is not defined라고 뜬다 - 결론은 *변수 취급이다.
    //비디오 제목의 경우 특수문자(괄호문제) 배제하는 정규식을 이용하기
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const str = video.snippet.title.replace(reg, "");
    videoList2.push(
      `<li class="container" onclick="videoShow('${video.id}','${str}','${video.snippet.description}','${video.snippet.channelTitle}')">`
    );
    videoList2.push(`<div class="video">`);
    videoList2.push(
      `<img class="thumbnail" src='${video.snippet.thumbnails.medium.url}'>`
    );
    videoList2.push(`<div>`);
    videoList2.push(`<p class="title">${video.snippet.title}</p>`);
    videoList2.push(
      `<p class="channelTitle">${video.snippet.channelTitle}</p>`
    );
    videoList2.push(`</div>`);
    videoList2.push(`</div>`);
    videoList2.push(`</li>`);
  }); //end of map
  videoList2.push(`</ul>`);
  document.querySelector("#root").innerHTML = videoList2.join("");
};
