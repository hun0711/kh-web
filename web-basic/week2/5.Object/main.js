//객체 : Object
//데이터를 property라는 인덱싱을 통해 구조적으로 묶어놓은 형태

let car = {
  name: "2023년형 소나타",
  wheelNum: 4,
  speed: 0,
  carColor: "red",
};

console.log(car);
car.carColor = "black";
console.log(
  `내 자동차는 ${car.name}이고 바퀴수는 ${car.wheelNum}이고 색상은 ${car.carColor}이다.`
);
