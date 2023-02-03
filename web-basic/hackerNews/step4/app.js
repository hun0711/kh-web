const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const divContent = document.createElement("div"); //제목에 대한 상세내용
xhr.open("GET", NEWS, false);
xhr.send();

const news = JSON.parse(xhr.responseText);
const ul = document.createElement("ul");

//해시이벤트처리 추가
//해시값이 변경되면 호출됨

window.addEventListener("hashchange", function () {
  //console.log("해시가 변경됨");
  //console.log(location.hash); //#34577246
  const id = this.location.hash.substring(1); //#을 제거함
  console.log("before===>" + CONTENT);
  console.log("after===>" + CONTENT.replace("@id", id));
  xhr.open("GET", CONTENT.replace("@id", id), false);
  xhr.send();

  const newsContent = JSON.parse(xhr.responseText);
  const h1 = this.document.createElement("h1");
  console.log(newsContent.title);
  h1.innerHTML = newsContent.title;
  divContent.appendChild(h1);
  //console.log(divContent);
  
});

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${news[i].id}`;
  a.innerHTML = `${news[i].title}(${news[i].comments_count})`;

  li.appendChild(a);
  ul.appendChild(li);
} //end of for

document.querySelector("#title").appendChild(ul);
document.querySelector("#title").appendChild(divContent);
