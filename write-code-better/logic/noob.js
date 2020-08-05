function toAccouting(n) {
  if(n < 0) {
    return '(' + Math.abs(n) + ')'
  } else {
    return n
  }
}

console.log(toAccouting(undefined))
console.log(toAccouting(0))
console.log(toAccouting(10))
console.log(toAccouting(-5))