function numberToAccoutingString(number) {
  if(number != null) {
    if(number < 0) {
      return `(${Math.abs(number)})`
    } else {
      return number.toString()
    }
  }
}

console.log(numberToAccoutingString(undefined))
console.log(numberToAccoutingString(0))
console.log(numberToAccoutingString(10))
console.log(numberToAccoutingString(-5))