// 클래스값이면 .붙임, 태그이름이면 안붙임
const a = document.querySelector("a");
console.dir(a); //DOM구조를 봄
console.log(a);

a.onlick = () => {
  console.log("링크클릭");
};

a.onlick = () => {
  console.log("링크클릭 다시");
};

a.addEventListener("click", () => {
  console.log("클릭");
});

a.addEventListener("click", () => {
  console.log("클릭 다시");
});
