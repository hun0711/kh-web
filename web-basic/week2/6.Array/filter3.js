const array = [-1, 0, 1];
let other = [];

other = array.filter((item) => item >= 0);

console.log(other);

const condition = (item) => item >= 0;
let other1 = [];
other1 = array.filter(condition);
console.log(other1);
