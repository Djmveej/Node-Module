function BigNumber(a, b, c) {
  if (a > b && b > c && a > c) {
    return a;
  } else if (a < b && b > c && a > c) {
    return b;
  } else if (a < b && b < c && a < c) {
    return c;
  }
}

console.log(BigNumber(4, 5, 3));
console.log(BigNumber(12, 8, 3));
console.log(BigNumber(14, 5, 18));
console.log(BigNumber(21, 25, 33));
console.log(BigNumber(124, 52, 72));
console.log(BigNumber(41, 51, 31));
//console.log(max(4,5,3)) => 5;
//console.log(max(4,5,4)) => 5;
//console.log(max(4,4,4)) => 4;
//console.log(max(-1,-2,-3)) => -1;
