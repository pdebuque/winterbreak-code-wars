// call a number that satisfies this a squareDiv

function isInteger(num) {
  if (Math.floor(num) === num) return true
  return false
}

// find divisors of a number
function findDivisors(num) {
  const divisors = [num];
  for (let i = 1; i <= num / 2; i++) {
    if (!(num % i)) divisors.push(i)
  }
  return divisors
}

console.log(findDivisors(360))

// find the sum of squares of the divisors
function squareSumDiv(num) {
  const divisors = findDivisors(num);
  return divisors.reduce((acc, curr) => acc + curr * curr, 0);
}

// check if the sum is a square
function isSquareDiv(num) {
  return isInteger(Math.sqrt(squareSumDiv(num)))
}

console.log(isSquareDiv(246));

// construct the results array by looping through the range
function listSquared(min, max) {
  const squareDivs = [];
  for (let i = min; i <= max; i++) {
    if (isSquareDiv(i)) {
      squareDivs.push([i, squareSumDiv(i)])
    }
  }
  return squareDivs
}

list_squared(1, 250).map(result=>console.log(result))