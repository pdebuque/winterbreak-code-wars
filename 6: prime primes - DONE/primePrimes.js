/* 
- find all primes less than n

- find all combinations

- sum up combinations
*/

// test if prime
function isPrime(n) {
  for (let i = 2; i <= n / 2; i++) {
    if (!(n % i)) return false
  }
  return true
}

console.log('isPrime(3); expect true: ', isPrime(3))
console.log('isPrime(6); expect false: ', isPrime(6))
console.log('isPrime(13); expect true: ', isPrime(13))

// all primes less than n
function allPrimes(n) {
  if (n < 3) return []; // 3 is the first number with primes less than it
  const primesArr = [2];
  for (let i = 3; i < n; i++) {
    if (isPrime(i)) primesArr.push(i)
  }
  return primesArr
}

console.log('allPrimes(10); expect [2,3,5,7]:', allPrimes(10));
console.log('allPrimes(25); expect [2,3,5,7,11,13,17,19,23]:', allPrimes(25))

// given array of values, return array of all fractional combinations of values

function findFractionsArr(arr) {
  const output = []

  for (let el of arr) {
    const ind = arr.indexOf(el);
    const arrTemp = [...arr].slice(ind+1)
    arrTemp.map(elem=>{
      output.push(el/elem)
    })
  }
  return output
}

console.log('findFractions([1,2,3]):', findFractionsArr([1,2,3]));
console.log('findFractions([2,3,5,7]):',findFractionsArr([2,3,5,7]))


// expected output: [<count>,<integer>]

function primePrimes(n) {
  return [findFractionsArr(allPrimes(n)).length,Math.floor(findFractionsArr(allPrimes(n)).reduce((acc,curr)=>acc+curr,0))]
}

console.log('primePrimes(6):', primePrimes(6))