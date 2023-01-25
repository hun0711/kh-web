/* 리터럴을 이용한 배열 선언 및 초기화 */
let colors = ["red", "green", "blue"];

// for (color in colors) {
//   console.log(color, ",color:", colors[color]);
// }

// for (color in colors) {
//   console.log(",color:", color);
// }

let items = [
  { id: 1, name: "벤치프레스", count: 0 },
  { id: 2, name: "데드리프트", count: 0 },
  { id: 3, name: "덤벨 숄더 프레스", count: 0 },
];

for (item in items) {
  console.log(item, ",item:", items[item]);
}

for (let item of items) {
  console.log(item.id + item.name + item.count);
}

const student = {
  name: "이순신",
  age: 45,
  address: "대전",
};

// for (let key in student) {
//   console.log(key, ",", student[key]);
// }
