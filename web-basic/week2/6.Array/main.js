//배열 : Array Copy
//얕은 복사(원본이 바뀜,동기화됨)와 깊은 복사(복사본바뀜,비동기)

const colors = ["red", "green", "blue"];
const copy = [];

["red", "green", "blue"].forEach((color) => {
  copy.push(color);
});

console.log(copy);
