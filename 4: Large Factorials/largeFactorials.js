// why doesn't the simple solution work? 

// function factorial(n) {
//   let output = 1n
//   for (let i = 1; i <= n; i++) {
//     output = output * BigInt(i)
//   }
//   return String(output)
// }

// console.log(factorial(15))


// algorithm for multiplication of large numbers, represented as arrays of digits

// e.g., [2,5,1,6,8,4,5,7,2,4,1] and [1,6,7,8,6,0,9,3]

// return another array of digits

// step 1: arr * num

function arrNumMult(arr, num) {
  // initial multiplication simply multiplies each digit by the number. save each 'digit' as a string for later manipulation
  const initMult = [...arr].map(el => String(el * num));
  console.log(initMult);

  // now, carry values. iterate backwards through array

  return carry(initMult)
}

// carry operator: iterate backwards through the digits array, carrying digits as necessary
// digitsArr is an array of integers
function carry(digitsArr) {

  const digitsStringArr = digitsArr.map(el => String(el));
  console.log(digitsStringArr);

  // deal with all digits except the first. first digit dealt with separately
  for (let i = digitsArr.length - 1; i > 0; i--) {
    // console.log(`inspecting digit ${i}: ${digitsStringArr[i]}`)
    // console.log(`length of digit ${i}: ${digitsStringArr[i].length}`)
    if (digitsStringArr[i].length > 1) {
      // console.log(`carrying digit ${i}, ${digitsStringArr[i]}`)
      const carry = Number(digitsStringArr[i][0])
      digitsStringArr[i] = digitsStringArr[i].slice(1);
      digitsStringArr[i - 1] = String(Number(digitsStringArr[i - 1]) + carry)
    }
  }
  // special case for the first digit
  if (digitsStringArr[0].length > 1) {
    const carry = digitsStringArr[0][0]
    digitsStringArr.unshift(carry)
    digitsStringArr[1] = digitsStringArr[1].slice(1)
  }
  return digitsStringArr.map(el => Number(el))
}

console.log('carry([12,2,14]), expect [1, 2, 3, 4]:', carry([12, 2, 14]))
console.log('carry([19,48,62], expect [2, 4, 4, 2]', carry([19, 48, 62]))
console.log('arrNumMult([2,4,6,8], 2), expect [4, 9, 3, 6]:', arrNumMult([2, 4, 6, 8], 2))

// ----------- STEP 2: iterate arrNumMult for full arr x arr ---------------

// first, module for array addition
function arrAdd(arr1, arr2) {
  let outputArr = []
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i=0; i<length; i++) {
    outputArr.push()
  }
}

// order does not matter (length)
// remember to correct for 10s digit

function arrArrMult(arr1, arr2) {

  // iterate backwards to simplify adding 0s
  for (let i = arr1.length - 1; i >= 0; i--) {

  }
}
