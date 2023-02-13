console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000); //mili sex 1000이 1초
console.log(hap(1, 3)); //import문이 뒤에 있음에도 4가 출력됨 - 왜냐면 호이스팅이 발생
import { hap } from "./module1.js";
console.log(3);
/* import문도 호이스팅이 일어난다! */
