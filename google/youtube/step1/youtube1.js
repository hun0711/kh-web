const ajax = new XMLHttpRequest();
let content = "";
const key = "AIzaSyAf2833_HqoWOxEqydCY7aeWwQS6Bgo2Zc";
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;

ajax.open("GET", MOST_URL, false);
ajax.send();

const most = JSON.parse(ajax.response);
const items = most.items;
console.log(items);
console.log(items.length);
for (let i = 0; i < items.length; i++) {
  console.log(items[i].snippet.thumbnails.medium.url);
  console.log("내용 : " + items[i].snippet.description);
  console.log("제목 : " + items[i].snippet.title);
}
