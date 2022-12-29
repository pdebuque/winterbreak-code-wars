/* 
- separate the integer into an array of digits

2134562 => 2134526
9834765891 => 9834765819
84972 => 84927

987123 => 987132
          987321
          987213
          983721

15309678 => 15308976
              

- algorithm:
  - starting with the last digit, find the first substring that is not strictly ascending
  - move the second highest number in this substring to the first position
  - sort the rest of the numbers strictly descending
*/

console.log([1, 3, 4, 6, 2].sort())
console.log([1, 2, 3].sort())

function toArray(num) {
  return String(num).split('')
}

console.log(toArray(3245))

// module for array equality
function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

console.log('arrayEquals([1, 2, 3], [1, 2, 3]); expect true: ', arrayEquals([1, 2, 3], [1, 2, 3]))
console.log('arrayEquals([1, 2, 3], [1, 3, 2]); expect false: ', arrayEquals([1, 2, 3], [1, 3, 2]))


// determine if a sequence of number is non-ascending. spread operator bc sort() works in place
function isAscending(arr) {
  return arrayEquals(arr, [...arr].sort())
}

console.log('isAscending([1,2,3]); expect true:', isAscending([1, 2, 3]));
console.log('isAscending([1,3,2]); expect false:', isAscending([1, 3, 2]));

// find the non-ascending substring, starting at the end
function findSubstring(arr) {
  for (let i = 2; i <= arr.length; i++) {
    const subArray = [...arr].splice((arr.length - i));
    if (!isAscending(subArray)) {
      
      return subArray
    }
  }
  return false
}

// console.log([1, 2, 3, 4, 5].splice(1))

console.log('findSubstring([4,7,3,5,6]); expect [7,3,5,6]:', findSubstring([4, 7, 3, 5, 6]));
console.log('findSubstring([1,1,1]); expect false:', findSubstring([1, 1, 1]))

function findAndRemove(arr, el) {
  // console.log('---- findAndRemove ----')
  const ind = arr.indexOf(el)
  arr.splice(ind, 1)
  return arr
}

console.log('findAndRemove([1,2,3,4],3); expect [1,2,4]: ', findAndRemove([1, 2, 3, 4], 3))

function nextSmaller(num) {
  console.log('---- nextSmaller -----')
  const substring = findSubstring(toArray(num));
  if (!substring) return -1
  console.log(substring)
  const secondLargest = [...substring].sort().reverse()[1]
  console.log('secondLargest: ', secondLargest)
  const subSub = findAndRemove(substring, secondLargest).
  console.log(subSub)
}

console.log(nextSmaller(54826))

