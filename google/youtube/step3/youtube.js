const keyword = document.querySelector("#keyword");
//input textfield에 입력한 후 엔터 쳤을 때를 잡아내는 함수
keyword.addEventListener("keypress", (event) => {
  console.log("onkeypress가 엔터인지 아닌지" + event.keyCode);
  //사용자가 입력한 검색어를 찾는 함수 호출
  handleSearch();
});

//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value;
  console.log("사용자가 입력한 검색어 ===>" + user);
  search(user);
};

//사용자가 입력한 검색어로 조건 검색 구현하기
const search = (user) => {
  console.log("사용자가 입력한 bts 받음 :" + user);
  const ajax = new XMLHttpRequest();
  const videoList2 = [];
  const key = "AIzaSyAf2833_HqoWOxEqydCY7aeWwQS6Bgo2Zc";
  const searchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${user}&key=${key}`;

  ajax.open("GET", searchURL, false);
  ajax.send();
  const rst = JSON.parse(ajax.response);
  console.log(rst);
  const items = rst.items;

  videoList2.push(`<ul class="videos">`);
  for (let i = 0; i < items.length; i++) {
    videoList2.push(`<li class="container">`);
    videoList2.push(`<div class="video">`);
    videoList2.push(
      `<img class="thumbnail" src='${items[i].snippet.thumbnails.medium.url}'>`
    );
    videoList2.push(`<div>`);
    videoList2.push(`<p class="title">${items[i].snippet.title}</p>`);
    videoList2.push(
      `<p class="channelTitle">${items[i].snippet.channelTitle}</p>`
    );
    videoList2.push(`</div>`);
    videoList2.push(`</div>`);
    videoList2.push(`</li>`);
  }
  videoList2.push(`</ul>`);

  document.querySelector("#root").innerHTML = videoList2.join("");
};
