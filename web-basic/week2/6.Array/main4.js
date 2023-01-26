//배열 : Array Copy
//얕은 복사(원본이 바뀜,동기화됨)와 깊은 복사(복사본바뀜,비동기)

const colors = ["red", "green", "blue"];
const copy = [];

//이전 방식
for (let i = 0; i < colors.length; i++) {
  copy.push(colors[i]);
  console.log(`copy[${i}]:${copy[i]}`);
}
//이후 방식
colors.forEach(function (color) {
  copy.push(color);
  console.log(`${copy}`);
});
["red", "green", "blue"].forEach((color) => {
  copy.push(color);
});
