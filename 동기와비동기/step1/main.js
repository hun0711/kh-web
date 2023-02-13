const hap = (x, y) => {
  setTimeout(() => {
    return x + y;
  }, 3000);
};

const x = hap(2, 3);
console.log(x);
const y = x;
console.log(y);

//7번과 9번은 종속적이다. 왜?  y의 값이 결정되려면 7번이 필요함
//동기적이다? 비동기적이다? - 동기적이다(순차적이다)
