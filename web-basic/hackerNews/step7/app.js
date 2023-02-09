//현재 페이지가 몇번째 페이지인지 알고 있어야 한다
//페이지가 변경될 수 있으니까 let을 쓴다
//상태 관리하는걸 react에서 store
const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.querySelector("#title");
const divContent = document.createElement("div"); //제목에 대한 상세내용
//페이징 처리 - 1step
const store = {
  currentPage: 1, //현재 내가 바라보는 페이지 번호
};

//아래 함수의 사용처는 두 군데임
//요청 URL만 바뀜 나머지는 같음 - 그래서 파라미터를 url로 줌
function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

//뉴스 목록 가져오기
function newsList() {
  const news = getData(NEWS);
  //태그를 담을 배열 선언하기
  const getList = [];
  //li태그 담기전에 ul태그 먼저 담기
  getList.push("<ul>");
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    getList.push(
      `<li>
    <a href='#/show/${news[i].id}'>
    ${news[i].title}(${news[i].comments_count})
    </a>
    </li>
    `
    );
  } //end of for
  //배열의 맨 뒤에 추가하는 함수가 push임
  getList.push("</ul>");
  getList.push("<div>"); //스타일 추가 고려한 추가
  getList.push(
    `<a href=#/page/${
      store.currentPage > 1 ? store.currentPage - 1 : 1
    }>이전페이지</a>`
  );
  getList.push("&nbsp;&nbsp;"); //링크사이 띄어쓰기
  getList.push(`<a href='#/page/${store.currentPage + 1}'>다음페이지</a>`);
  getList.push("</div>");
  //빈문자열 주면 구분자 없는 하나의 합쳐진 HTML문자열을 얻음
  container.innerHTML = getList.join("");
} ////end of newsList

//뉴스 상세 내용 보기
function newsDetail() {
  const id = this.location.hash.substring(7); //상세보기시 앞에 #/show/가 있으니까
  const newsContent = getData(CONTENT.replace("@id", id));
  container.innerHTML = `
  <h1>${newsContent.title}</h1>
  <div>
  <a href="#/page/${store.currentPage}">목록으로</a>
  </div>
  `;
}

//라우터에서 화면 전환하기
function router() {
  //글 목록의 링크는 #.그러면 location.href에 #이 들어왔을텐데
  //왜 이게 참일까? location.href에 #만 들어오면 빈 값을 반환
  //그래서 이 코드가 작동하는 것임..
  const routePath = location.hash;
  //첫 진입일 때는 newsList를 호출한다
  if (routePath === "") {
    //처음 요청시에는 해시값이 없으니까 여기가 실행됨
    newsList();
  } else if (routePath.indexOf("#/page/") >= 0) {
    //해시값 중에서 숫자값만 추출하기
    //#을 제거하고 문자열 길이를 계산 후 문자열을 숫자로 바꾸어야 함
    store.currentPage = Number(routePath.substring(7));
    newsList();
  } else {
    newsDetail();
  }
} // end of router

window.addEventListener("hashchange", router);
router();
