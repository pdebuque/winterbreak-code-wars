function narcissistic(n) {
  return String(n)
          .split('')
          .map(el=>Math.pow(Number(el), String(n).length))
          .reduce((acc,curr)=>acc+curr,0)
          === n 
}

console.log('narcissistic(153), expect true: ', narcissistic(153))
console.log('narcissistic(1652), expect false: ', narcissistic(1652))