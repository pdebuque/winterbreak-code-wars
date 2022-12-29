// function finds all multiples of 3 or 5 less than input n and outputs them as an array

function all3or5(n) {
  const output = [];
  for (let i = 1; i < n; i++) {
    if (!(i % 3) || !(i % 5)) {
      output.push(i)
    }
  }
  return output
}

console.log('all3or5(10); expect [3,5,6,9]:', all3or5(10));
console.log('all3or5(30); expect [3,5,6,9,10,12,15,18,20,21,24,25,27]:', all3or5(30));

// sum all elements
function solution(number) {
  return all3or5(number).reduce((acc, curr) => acc + curr, 0)
}

console.log('solution(10): expect 23:', solution(10))